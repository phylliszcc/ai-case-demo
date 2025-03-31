import React, { useState } from "react";

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
    alert("生成案例初稿成功！（模拟提交）");
    console.log("提交内容:", formData);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, backgroundColor: '#f1f5f9', borderRadius: 8 }}>
      <h2>客户案例AI输入表单</h2>
      <input placeholder="客户公司名称" value={formData.company} onChange={handleChange("company")} style={{ width: '100%', margin: '8px 0' }} />
      <input placeholder="所在行业/国家" value={formData.industry} onChange={handleChange("industry")} style={{ width: '100%', margin: '8px 0' }} />
      <textarea placeholder="面临的业务挑战" value={formData.challenge} onChange={handleChange("challenge")} style={{ width: '100%', margin: '8px 0' }} />
      <textarea placeholder="我们提供的解决方案" value={formData.solution} onChange={handleChange("solution")} style={{ width: '100%', margin: '8px 0' }} />
      <textarea placeholder="实施过程（时间线/关键步骤）" value={formData.implementation} onChange={handleChange("implementation")} style={{ width: '100%', margin: '8px 0' }} />
      <textarea placeholder="客户反馈/成效数据（可选）" value={formData.outcome} onChange={handleChange("outcome")} style={{ width: '100%', margin: '8px 0' }} />
      <input type="file" accept="audio/*" onChange={handleChange("audioFile")} style={{ margin: '8px 0' }} />
      <div>{formData.audioFile?.name || "上传语音（可选）"}</div>
      <button onClick={handleSubmit} style={{ marginTop: 12, padding: '6px 12px' }}>生成案例初稿</button>
    </div>
  );
}
