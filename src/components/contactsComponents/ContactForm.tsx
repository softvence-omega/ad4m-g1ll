"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import HomeButton from "../reusable/HomeButton";

function ContactForm() {
  return (
    <div className="bg-[#2E47A3] p-6 md:p-12 flex flex-col lg:flex-row items-stretch justify-center gap-6">
      {/* Form Section - White Card */}
      <div className="flex-1 bg-white p-6 md:p-12 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name here"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="info@email.com"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="+00-000-0000"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="company" className="text-gray-700 font-medium">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Company Name..."
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 mb-8">
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Please type your message here..."
            rows={6}
            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
          />
        </div>

        <HomeButton title="Send Message" />
      </div>

      {/* Information Section - Blue Background */}
      <div className="flex-1 text-white p-6 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Get in Touch
        </h2>
        <p className="mb-12 text-blue-100 text-base md:text-lg leading-relaxed opacity-90">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type.
        </p>

        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-blue-200 text-sm uppercase tracking-wide">
                Send us an email
              </span>
              <a
                href="mailto:rnd@email.com"
                className="text-lg md:text-xl font-medium hover:text-blue-200 transition-colors"
              >
                rnd@email.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Phone size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-blue-200 text-sm uppercase tracking-wide">
                Give us a call
              </span>
              <a
                href="tel:+00-000-0000"
                className="text-lg md:text-xl font-medium hover:text-blue-200 transition-colors"
              >
                +00-000-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
