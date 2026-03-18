"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "아마존 셀링",
  "아마존 마케팅",
  "광고 관리",
  "물류 관리",
  "최적화 서비스",
  "데이터 분석",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string>("");
  const [showPrivacyText, setShowPrivacyText] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData();
      formData.append("brand", data.brand);
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("amazonStatus", data.amazonStatus);
      formData.append("services", JSON.stringify(data.services));
      formData.append("message", data.message);

      if (fileInputRef.current?.files?.[0]) {
        formData.append("file", fileInputRef.current.files[0]);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitStatus("success");
        reset();
        setFileName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const errorClass = "text-red-500 text-sm mt-1";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contact Us"
          title="문의하기"
          description="아마존 셀링에 관한 모든 것, 편하게 문의해주세요."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
        >
          {/* 2-column layout on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClass}>
                브랜드 (회사명) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="회사명을 입력해주세요"
                className={inputClass}
                {...register("brand")}
              />
              {errors.brand && <p className={errorClass}>{errors.brand.message}</p>}
            </div>

            <div>
              <label className={labelClass}>
                성함 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="담당자 성함을 입력해주세요"
                className={inputClass}
                {...register("name")}
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>

            <div>
              <label className={labelClass}>
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                className={inputClass}
                {...register("phone")}
              />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>

            <div>
              <label className={labelClass}>
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
          </div>

          {/* Amazon Status */}
          <div className="mb-6">
            <label className={labelClass}>
              아마존 입점 여부 <span className="text-red-500">*</span>
            </label>
            <select className={inputClass} {...register("amazonStatus")}>
              <option value="">선택해주세요</option>
              <option value="yes">예, 이미 입점했습니다</option>
              <option value="no">아니오, 아직 입점 전입니다</option>
              <option value="preparing">입점 준비 중입니다</option>
            </select>
            {errors.amazonStatus && (
              <p className={errorClass}>{errors.amazonStatus.message}</p>
            )}
          </div>

          {/* Services Checkboxes */}
          <div className="mb-6">
            <label className={labelClass}>
              희망 서비스 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                    className="w-4 h-4 text-primary rounded focus:ring-primary"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
            {errors.services && (
              <p className={errorClass}>{errors.services.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className={labelClass}>
              문의 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="문의 내용을 상세히 작성해주세요."
              className={`${inputClass} resize-none`}
              {...register("message")}
            />
            {errors.message && (
              <p className={errorClass}>{errors.message.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className={labelClass}>파일 첨부</label>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.dataTransfer.files?.[0]) {
                  const dt = new DataTransfer();
                  dt.items.add(e.dataTransfer.files[0]);
                  if (fileInputRef.current) {
                    fileInputRef.current.files = dt.files;
                  }
                  setFileName(e.dataTransfer.files[0].name);
                }
              }}
              className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                className="hidden"
              />
              {fileName ? (
                <p className="text-sm text-foreground">
                  📎 {fileName}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFileName("");
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    삭제
                  </button>
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  클릭하거나 파일을 드래그하여 업로드하세요.
                </p>
              )}
            </div>
          </div>

          {/* Privacy Agreement */}
          <div className="mb-8">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("privacyAgreed")}
                className="w-4 h-4 mt-0.5 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm">
                개인정보 수집 및 이용에 동의합니다.{" "}
                <button
                  type="button"
                  onClick={() => setShowPrivacyText(!showPrivacyText)}
                  className="text-primary underline"
                >
                  {showPrivacyText ? "닫기" : "자세히 보기"}
                </button>
              </span>
            </label>
            {errors.privacyAgreed && (
              <p className={errorClass}>{errors.privacyAgreed.message}</p>
            )}
            {showPrivacyText && (
              <div className="mt-3 p-4 bg-muted rounded-lg text-xs text-muted-foreground leading-relaxed">
                <p className="font-semibold mb-2">개인정보 수집 및 이용 동의</p>
                <p>
                  1. 수집 항목: 회사명, 성함, 연락처, 이메일, 문의 내용
                  <br />
                  2. 수집 목적: 서비스 문의 접수 및 상담 진행
                  <br />
                  3. 보유 기간: 문의 접수일로부터 1년, 이후 파기
                  <br />
                  4. 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있으며, 동의 거부 시
                  상담 신청이 제한됩니다.
                </p>
              </div>
            )}
          </div>

          {/* Submit Button & Status */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto min-w-[200px]"
            >
              {isSubmitting ? "전송 중..." : "문의 전송"}
            </Button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-600 font-medium"
              >
                문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.
              </motion.p>
            )}

            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-500 font-medium"
              >
                전송에 실패했습니다. 잠시 후 다시 시도해주세요.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
