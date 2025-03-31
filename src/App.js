import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function AICaseInputDemo() {
  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    challenge: "",
    solution: "",
    implementation: "",
    outcome: "",
    audioFile: null
  });

  const handleChange = (field) => (e) => {
    const value = field === "audioFile" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    alert("生成案例初稿成功！（此处可对接AI文案服务）");
    console.log("提交内容:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="shadow-xl">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-semibold">客户案例AI输入表单</h2>

          <Input placeholder="客户公司名称" value={formData.company} onChange={handleChange("company")} />
          <Input placeholder="所在行业/国家" value={formData.industry} onChange={handleChange("industry")} />
          <Textarea placeholder="面临的业务挑战" value={formData.challenge} onChange={handleChange("challenge")} />
          <Textarea placeholder="我们提供的解决方案" value={formData.solution} onChange={handleChange("solution")} />
          <Textarea placeholder="实施过程（时间线/关键步骤）" value={formData.implementation} onChange={handleChange("implementation")} />
          <Textarea placeholder="客户反馈/成效数据（可选）" value={formData.outcome} onChange={handleChange("outcome")} />

          <div className="flex items-center space-x-2">
            <Input type="file" accept="audio/*" onChange={handleChange("audioFile")} />
            <Upload className="w-5 h-5" />
            <span>{formData.audioFile?.name || "上传语音（可选）"}</span>
          </div>

          <Button onClick={handleSubmit}>生成案例初稿</Button>
        </CardContent>
      </Card>
    </div>
  );
}
