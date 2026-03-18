import { z } from "zod";

export const contactSchema = z.object({
  brand: z.string().min(1, "브랜드(회사명)를 입력해주세요."),
  name: z.string().min(1, "성함을 입력해주세요."),
  phone: z
    .string()
    .min(1, "연락처를 입력해주세요.")
    .regex(/^[\d\-+() ]+$/, "올바른 연락처를 입력해주세요."),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("올바른 이메일 형식을 입력해주세요."),
  amazonStatus: z.string().min(1, "아마존 입점 여부를 선택해주세요."),
  services: z
    .array(z.string())
    .min(1, "희망 서비스를 하나 이상 선택해주세요."),
  message: z.string().min(1, "문의 내용을 입력해주세요."),
  privacyAgreed: z.literal(true, {
    error: "개인정보 수집 및 이용에 동의해주세요.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
