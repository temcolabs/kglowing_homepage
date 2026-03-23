import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

const TENANT_ID = "57f72a25-11e6-492d-bafe-fdd878cd7fd6";
const RECIPIENT_EMAIL = "official@kglowing.com";

async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    client_id: process.env.AZURE_CLIENT_ID!,
    client_secret: process.env.AZURE_CLIENT_SECRET!,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const res = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );

  if (!res.ok) {
    throw new Error("Azure 액세스 토큰 발급 실패");
  }

  const data = await res.json();
  return data.access_token;
}

async function sendEmail(data: {
  brand: string;
  name: string;
  phone: string;
  email: string;
  amazonStatus: string;
  services: string[];
  message: string;
}) {
  const accessToken = await getAccessToken();
  const senderEmail = process.env.SENDER_EMAIL!;

  const servicesText = data.services.join(", ");

  const emailBody = `
<html>
<body style="font-family: sans-serif; color: #333;">
  <h2 style="color: #1a56db;">Kglowing 홈페이지 문의</h2>
  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9; width: 140px;"><b>브랜드명</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.brand}</td></tr>
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><b>담당자명</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><b>연락처</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><b>이메일</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><b>아마존 입점 여부</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.amazonStatus}</td></tr>
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><b>희망 서비스</b></td><td style="padding: 8px; border: 1px solid #ddd;">${servicesText}</td></tr>
    <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><b>문의 내용</b></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message.replace(/\n/g, "<br>")}</td></tr>
  </table>
</body>
</html>
  `.trim();

  const mailPayload = {
    message: {
      subject: `[Kglowing 문의] ${data.brand} - ${data.name}`,
      body: {
        contentType: "HTML",
        content: emailBody,
      },
      toRecipients: [{ emailAddress: { address: RECIPIENT_EMAIL } }],
      replyTo: [{ emailAddress: { address: data.email, name: data.name } }],
    },
    saveToSentItems: false,
  };

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailPayload),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`이메일 전송 실패: ${errorText}`);
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const rawData = {
      brand: formData.get("brand") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      amazonStatus: formData.get("amazonStatus") as string,
      services: JSON.parse((formData.get("services") as string) || "[]"),
      message: formData.get("message") as string,
      privacyAgreement: formData.get("privacyAgreement") === "true",
    };

    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      return NextResponse.json(
        { error: "유효성 검증 실패", details: result.error.flatten((i) => i.message) },
        { status: 400 }
      );
    }

    const { privacyAgreement: _, ...emailData } = result.data;
    await sendEmail(emailData);

    return NextResponse.json(
      { message: "문의가 성공적으로 접수되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
