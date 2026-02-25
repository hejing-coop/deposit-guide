/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink, 
  ChevronRight,
  Info,
  CheckCircle2,
  Copy,
  UploadCloud,
  ArrowRightLeft
} from 'lucide-react';

// Color Palette
const colors = {
  bg: '#0B0E14',
  card: '#161B22',
  goldLight: '#F9F1D8',
  gold: '#D4AF37',
  secondaryText: '#8B949E',
  usdtGreen: '#26A17B',
  white: '#FFFFFF',
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'pc' | 'mobile' | 'notes'>('pc');

  const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
    <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
      <div className="p-2 rounded-lg" style={{ backgroundColor: colors.gold }}>
        <Icon className="text-slate-900 w-6 h-6" />
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F9F1D8] to-[#D4AF37] text-transparent bg-clip-text">
        {title}
      </h2>
    </div>
  );

  const StepCard = ({ number, title, content, imageDesc }: { number: number, title: string, content: string[], imageDesc: string }) => (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 mb-10 transition-all hover:border-slate-700" style={{ backgroundColor: colors.card }}>
      <div className="p-6 flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-slate-900 font-bold" style={{ backgroundColor: colors.gold }}>
              {number}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <ul className="space-y-3">
            {content.map((item, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: colors.secondaryText }}>
                <ChevronRight className="w-4 h-4 mt-1 shrink-0" style={{ color: colors.gold }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-slate-900/50 rounded-xl min-h-[200px] flex items-center justify-center border border-slate-800 relative group overflow-hidden">
          {/* Placeholder for images from PDF */}
          <div className="text-center p-4">
            <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: colors.gold }}>Screenshot Reference</p>
            <p className="text-sm font-medium text-slate-400">{imageDesc}</p>
          </div>
          <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-200" style={{ backgroundColor: colors.bg }}>
      {/* Hero Section */}
      <header className="relative py-24 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(${colors.gold} 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-8 p-5 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 shadow-2xl">
            <ArrowRightLeft className="w-12 h-12" style={{ color: colors.gold }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            <span className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text">USDT 線上入金</span>
            <br />
            <span className="bg-gradient-to-r from-[#F9F1D8] via-[#D4AF37] to-[#F9F1D8] text-transparent bg-clip-text">渠道說明</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: colors.secondaryText }}>
            提供 PC 與手機端的完整操作引導，助您快速完成 USDT 入金流程。
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { id: 'pc', label: 'PC 端指引', icon: Monitor },
              { id: 'mobile', label: '手機端指引', icon: Smartphone },
              { id: 'notes', label: '入金詳解', icon: ShieldCheck },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border-2 ${activeTab === tab.id ? 'scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]' : 'opacity-60 hover:opacity-100'}`}
                style={{ 
                  backgroundColor: activeTab === tab.id ? colors.gold : 'transparent', 
                  color: activeTab === tab.id ? colors.bg : colors.gold, 
                  borderColor: colors.gold 
                }}
              >
                <tab.icon className="w-5 h-5" /> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        
        {activeTab === 'pc' && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SectionHeader title="PC 端提交介面引導" icon={Monitor} />
            <StepCard 
              number={1}
              title="登錄個人管理後臺"
              content={["訪問官方網址：https://td.pplgm.com/", "輸入您的電子郵件/手機與密碼進行登錄"]}
              imageDesc="PC 登錄介面截圖 (Page 2)"
            />
            <StepCard 
              number={2}
              title="發起入金申請"
              content={["進入『客戶概觀』", "選擇欲入金的帳戶", "點擊『入金』按鈕，系統將自動跳轉"]}
              imageDesc="客戶概觀與入金按鈕截圖 (Page 2)"
            />
            <StepCard 
              number={3}
              title="選擇渠道與金額"
              content={["選擇『USDT Pay』渠道", "填寫入金金額並提交", "※ 最低存款金額依頁面顯示為準"]}
              imageDesc="資金管理 - 入金介面截圖 (Page 3)"
            />
            <StepCard 
              number={4}
              title="核對並提交"
              content={["核對轉入帳戶、帳戶名稱", "確認金額及支付金額無誤後提交"]}
              imageDesc="入金申請核對介面截圖 (Page 3)"
            />
          </div>
        )}

        {activeTab === 'mobile' && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <SectionHeader title="手機端提交介面引導" icon={Smartphone} />
            <StepCard 
              number={1}
              title="登錄行動後臺"
              content={["訪問 https://td.pplgm.com/", "使用電子郵件或手機號碼登錄"]}
              imageDesc="手機登錄介面截圖 (Page 4)"
            />
            <StepCard 
              number={2}
              title="進入入金流程"
              content={["在『客戶概觀』點擊『入金』", "或從『菜單』-『資金管理』-『入金』進入"]}
              imageDesc="手機版帳戶概覽與菜單截圖 (Page 4)"
            />
            <StepCard 
              number={3}
              title="填入金額"
              content={["選擇『USDT Pay』並填寫金額"]}
              imageDesc="手機版入金申請填寫截圖 (Page 4)"
            />
            <StepCard 
              number={4}
              title="核對並提交"
              content={["核對所有資訊後點擊『提交』"]}
              imageDesc="手機版入金核對與提交截圖 (Page 4)"
            />
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-16">
            <SectionHeader title="USDT Pay 入金說明與注意事項" icon={ShieldCheck} />
            
            {/* Important Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden" style={{ backgroundColor: colors.card }}>
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: colors.gold }} />
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                  <Info className="w-6 h-6" style={{ color: colors.gold }} /> 操作要點
                </h3>
                <ul className="space-y-5">
                  {[
                    "詳閱 USDT 入金注意事項。",
                    "再次確認轉入交易帳戶、入金金額。",
                    "於 USDT 公鏈下拉選單中選擇正確區塊鏈。"
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: colors.secondaryText }}>
                      <div className="w-2 h-2 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" style={{ backgroundColor: colors.gold }} />
                      <span className="text-lg">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 rounded-[2.5rem] border border-red-900/30 shadow-2xl relative overflow-hidden bg-red-950/10">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-500">
                  <AlertTriangle className="w-6 h-6" /> 限制與警告
                </h3>
                <div className="space-y-6">
                  <p className="font-bold text-slate-200 text-lg">目前只接受以下公鏈協議：</p>
                  <div className="flex gap-5">
                    <span className="px-6 py-3 bg-slate-900 rounded-2xl border border-red-900/50 font-mono font-bold text-red-500 shadow-inner">TRC20</span>
                    <span className="px-6 py-3 bg-slate-900 rounded-2xl border border-red-900/50 font-mono font-bold text-red-500 shadow-inner">ERC20</span>
                  </div>
                  <p className="text-red-400/80 font-medium leading-relaxed">
                    ※ 不接受 BNB 鏈存入，誤存將導致資金損失。
                  </p>
                </div>
              </div>
            </div>

            {/* Final Steps */}
            <div className="p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-800" style={{ backgroundColor: colors.card }}>
              <h3 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-[#F9F1D8] to-[#D4AF37] text-transparent bg-clip-text">最後支付步驟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { 
                    icon: Copy, 
                    title: "1. 複製位址", 
                    desc: "系統生成錢包位址，點選圖示複製或掃描 QR 碼進行支付。",
                    image: "支付頁面截圖 (Page 6)"
                  },
                  { 
                    icon: UploadCloud, 
                    title: "2. 上傳憑證", 
                    desc: "支付成功後，點擊【+】上傳轉帳截圖。截圖需帶有 Hash 值。",
                    image: "轉帳憑證範例與 Hash 值標示 (Page 6)"
                  },
                  { 
                    icon: CheckCircle2, 
                    title: "3. 完成轉入", 
                    desc: "點選『完成轉入』，資金將於 15 分鐘內存入您的帳戶。",
                    isSuccess: true,
                    image: "完成轉入按鈕與成功提示"
                  }
                ].map((step, i) => (
                  <div key={i} className="text-center space-y-6 group">
                    <div className="w-20 h-20 mx-auto rounded-[2rem] flex items-center justify-center transition-all group-hover:scale-110 shadow-xl" 
                         style={{ backgroundColor: colors.bg, border: `1px solid ${step.isSuccess ? colors.usdtGreen : colors.gold}` }}>
                      <step.icon className="w-10 h-10" style={{ color: step.isSuccess ? colors.usdtGreen : colors.gold }} />
                    </div>
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: colors.secondaryText }}>{step.desc}</p>
                    
                    {/* 1 Image for each step */}
                    <div className="mt-6">
                      <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-800 flex flex-col items-center justify-center min-h-[150px]">
                        <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: colors.gold }}>Screenshot Reference</p>
                        <p className="text-sm text-slate-400">{step.image}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-slate-800" style={{ backgroundColor: colors.card }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl" style={{ backgroundColor: colors.gold }}>
              <span className="text-slate-900 font-black text-lg">PPLI</span>
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-white block">USDT 渠道說明手冊</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: colors.gold }}>Official Guide</span>
            </div>
          </div>
          <div className="flex gap-10 text-sm font-bold">
            <a href="#" className="hover:text-white transition-colors" style={{ color: colors.secondaryText }}>隱私政策</a>
            <a href="#" className="hover:text-white transition-colors" style={{ color: colors.secondaryText }}>服務條款</a>
            <a href="#" className="hover:text-white transition-colors" style={{ color: colors.secondaryText }}>聯繫客服</a>
          </div>
          <p className="text-xs font-mono" style={{ color: colors.secondaryText }}>
            © {new Date().getFullYear()} PPL International. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
