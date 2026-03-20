"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import SectionTitle from "@/components/ui/SectionTitle";


const serviceOptions = [
  "아마존 신규 입점",
  "아마존 운영 대행 (입점 완료)",
];

const countryOptions = ["북미", "중동", "유럽", "호주"];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      countries: [],
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
      formData.append("service", data.service);
      formData.append("countries", JSON.stringify(data.countries));
      formData.append("message", data.message);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitStatus("success");
        reset();
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
    "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const errorClass = "text-red-500 text-sm mt-1";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <section id="contact" data-theme="light" className="py-20 md:py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contact Us"
          title={<>브랜드를 글로벌로 키우는 방법은 이미 정해져 있습니다.<br />아마존 비즈니스, Kglowing과 함께하세요.</>}
          description={<>아래 양식을 통해 문의해주시면 가장 빠른 회신을 받으실 수 있습니다.<br />입점, 광고, 콘텐츠까지 나눠서 고민하지 마세요. Kglowing은 매출이 만들어지는 구조를 설계하고 실행합니다.</>}
          compact
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card rounded-2xl border border-border shadow-2xl shadow-black/40 p-6 md:p-10"
        >
          {/* 2-column layout on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClass}>
                브랜드 홈페이지 주소 <span className="text-red-500">*</span>
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

          {/* 희망 서비스 - Radio */}
          <div className="mb-6">
            <label className={labelClass}>
              희망 서비스 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <input
                    type="radio"
                    value={service}
                    {...register("service")}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">{service}</span>
                </label>
              ))}
            </div>
            {errors.service && (
              <p className={errorClass}>{errors.service.message}</p>
            )}
          </div>

          {/* 희망 진출 국가 - Checkbox */}
          <div className="mb-6">
            <label className={labelClass}>
              희망 진출 국가 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              {countryOptions.map((country) => (
                <label
                  key={country}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={country}
                    {...register("countries")}
                    className="w-4 h-4 text-primary rounded focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">{country}</span>
                </label>
              ))}
            </div>
            {errors.countries && (
              <p className={errorClass}>{errors.countries.message}</p>
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


          {/* Submit Button & Status */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto flex items-center justify-center w-full md:w-auto min-w-50 h-12 rounded-full text-white font-semibold text-base uppercase cursor-pointer border-0 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(93deg, #00ffd2b3 -1.1%, #00a1ffb3 101.31%)",
              }}
            >
              {isSubmitting ? "전송 중..." : "문의 전송"}
            </button>

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
