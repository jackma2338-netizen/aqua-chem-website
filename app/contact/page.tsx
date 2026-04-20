'use client';

/**
 * 联系我们页面
 * Contact Page with Form
 */

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { COMPANY_INFO } from '@/lib/constants';

const PRODUCT_INTERESTS = [
  '水性涂料',
  '水性胶黏剂',
  '水性助剂',
  '环保树脂',
  '表面处理剂',
  '功能性添加剂',
  '其他',
] as const;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              联系我们
            </h1>
            <p className="text-lg text-slate-300">
              无论您有任何问题或需求，我们的专业团队随时为您服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                联系方式
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">地址</div>
                    <div className="text-slate-600 text-sm mt-1">
                      {COMPANY_INFO.address.province}
                      {COMPANY_INFO.address.city}
                      {COMPANY_INFO.address.district}
                      <br />
                      {COMPANY_INFO.address.street}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">电话</div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-slate-600 text-sm mt-1 hover:text-teal-600 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">邮箱</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-600 text-sm mt-1 hover:text-teal-600 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">营业时间</div>
                    <div className="text-slate-600 text-sm mt-1">
                      周一至周五: 9:00 - 18:00
                      <br />
                      周六周日: 休息
                    </div>
                  </div>
                </div>
              </div>

              {/* WeChat QR */}
              <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                <div className="text-sm font-medium text-slate-900 mb-2">
                  扫码关注微信公众号
                </div>
                <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs">
                  微信二维码
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-100 shadow-sm">
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        提交成功！
                      </h3>
                      <p className="text-slate-600 mb-6">
                        感谢您的留言，我们将在 24 小时内与您联系
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        继续留言
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            姓名 <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="请输入您的姓名"
                            required
                            className="border-slate-200 focus:border-teal-300"
                          />
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                          <Label htmlFor="company">公司名称</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="请输入公司名称"
                            className="border-slate-200 focus:border-teal-300"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            邮箱 <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="请输入邮箱地址"
                            required
                            className="border-slate-200 focus:border-teal-300"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="phone">电话</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="请输入联系电话"
                            className="border-slate-200 focus:border-teal-300"
                          />
                        </div>
                      </div>

                      {/* Product Interest */}
                      <div className="space-y-2">
                        <Label htmlFor="product">
                          产品意向 <span className="text-red-500">*</span>
                        </Label>
                        <Select name="product" required>
                          <SelectTrigger className="border-slate-200 focus:border-teal-300">
                            <SelectValue placeholder="请选择感兴趣的产品" />
                          </SelectTrigger>
                          <SelectContent>
                            {PRODUCT_INTERESTS.map((product) => (
                              <SelectItem key={product} value={product}>
                                {product}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          留言内容 <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="请输入您的留言内容..."
                          required
                          rows={5}
                          className="border-slate-200 focus:border-teal-300 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700"
                      >
                        {isSubmitting ? (
                          '提交中...'
                        ) : (
                          <>
                            提交留言
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500">
                        我们重视您的隐私，不会将您的信息分享给第三方
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
