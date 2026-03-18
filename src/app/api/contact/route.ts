import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

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
      privacyAgreed: true,
    };

    // Server-side validation
    const result = contactSchema.safeParse(rawData);
    if (!result.success) {
      return NextResponse.json(
        { error: "유효성 검증 실패", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const file = formData.get("file") as File | null;

    // Log for now (email integration to be added later)
    console.log("Contact form submission:", {
      ...result.data,
      hasFile: !!file,
      fileName: file?.name,
    });

    // TODO: Integrate email sending (Nodemailer or external service)
    // TODO: Store submission in database if needed

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
