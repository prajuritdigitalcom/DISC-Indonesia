import { useState, useRef } from "react";
import {
  Printer,
  Share2,
  Copy,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Users,
  Compass,
  ArrowUpRight,
  TrendingUp,
  Download,
  Award,
  BookOpen,
  Building,
  Check,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DISCAnswer } from "../types";
import { calculateDISCScores, DISCScore } from "../utils/scoring";
import { getPersonalityResult, profiles } from "../data/profiles";

interface ResultsViewProps {
  answers: Record<number, DISCAnswer>;
  elapsedTime: number;
  onReset: () => void;
}

export default function ResultsView({ answers, elapsedTime, onReset }: ResultsViewProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [activeGraphTab, setActiveGraphTab] = useState<"publik" | "asli" | "campuran" | "semua">("semua");
  const [showPrintModal, setShowPrintModal] = useState(false);

  const results = calculateDISCScores(answers);
  const profile = getPersonalityResult(results.mostScores, results.leastScores);

  // Parse time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} menit ${secs} detik`;
  };

  // Copy Link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Copy text summary
  const handleCopySummary = () => {
    const summaryText = `Hasil Tes DISC Indonesia saya:
Tipe: ${profile.title}
"${profile.tagline}"

Skor:
- Dominance: ${Math.round((results.mostScores.D / 24) * 100)}%
- Influence: ${Math.round((results.mostScores.I / 24) * 100)}%
- Steadiness: ${Math.round((results.mostScores.S / 24) * 100)}%
- Compliance: ${Math.round((results.mostScores.C / 24) * 100)}%

Cek kepribadianmu gratis dan instan di ${window.location.origin}`;
    
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  // Print function
  const handlePrint = () => {
    try {
      const isIframe = window.self !== window.top;
      if (isIframe) {
        setShowPrintModal(true);
      } else {
        window.print();
      }
    } catch (e) {
      console.error("Gagal menjalankan window.print()", e);
      setShowPrintModal(true);
    }
  };

  // Download HTML Report function
  const handleDownloadHTML = () => {
    const today = new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    
    const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laporan Hasil Tes DISC - ${profile.title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      background-color: #f8fafc;
      margin: 0;
      padding: 40px 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      border: 1px solid #e2e8f0;
    }
    .header {
      border-bottom: 2px solid #fe4c6f;
      padding-bottom: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
    }
    .logo span {
      color: #fe4c6f;
    }
    .date {
      font-size: 14px;
      color: #64748b;
    }
    .badge {
      display: inline-block;
      background-color: rgba(254, 76, 111, 0.1);
      color: #fe4c6f;
      padding: 6px 16px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 15px;
    }
    h1 {
      font-size: 32px;
      font-weight: 900;
      color: #0f172a;
      margin: 0 0 10px 0;
      letter-spacing: -0.025em;
    }
    .tagline {
      font-size: 18px;
      font-style: italic;
      color: #fe4c6f;
      font-weight: 700;
      margin: 0 0 20px 0;
    }
    .desc {
      font-size: 15px;
      color: #334155;
      margin-bottom: 30px;
      line-height: 1.7;
    }
    .scores-grid {
      display: grid;
      grid-template-cols: repeat(4, 1fr);
      gap: 15px;
      margin-bottom: 35px;
    }
    .score-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 15px;
      text-align: center;
    }
    .score-val {
      font-size: 24px;
      font-weight: 850;
      margin-bottom: 4px;
    }
    .score-D { color: #ef4444; }
    .score-I { color: #f59e0b; }
    .score-S { color: #10b981; }
    .score-C { color: #3b82f6; }
    .score-label {
      font-size: 12px;
      font-weight: 700;
      color: #475569;
    }
    h2 {
      font-size: 20px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 8px;
      margin-top: 30px;
      margin-bottom: 15px;
    }
    ul {
      margin: 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
      font-size: 14px;
      color: #334155;
    }
    .comm-grid {
      display: grid;
      grid-template-cols: repeat(3, 1fr);
      gap: 15px;
      margin-top: 15px;
    }
    .comm-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 15px;
    }
    .comm-title {
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 700;
      color: #64748b;
      margin-bottom: 8px;
    }
    .comm-body {
      font-size: 13px;
      color: #334155;
      margin: 0;
    }
    .careers-grid {
      display: grid;
      grid-template-cols: repeat(2, 1fr);
      gap: 10px;
    }
    .career-item {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 600;
      color: #1e293b;
    }
    .conclusion-box {
      background: rgba(254, 76, 111, 0.04);
      border: 1px solid rgba(254, 76, 111, 0.15);
      border-radius: 16px;
      padding: 20px;
      text-align: center;
      margin-top: 40px;
    }
    .conclusion-title {
      font-weight: 800;
      color: #0f172a;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .conclusion-body {
      font-size: 14px;
      color: #334155;
      line-height: 1.7;
      margin: 0;
    }
    .btn-print {
      display: block;
      width: 100%;
      text-align: center;
      background: #fe4c6f;
      color: white;
      border: none;
      padding: 14px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 40px;
      transition: background 0.2s;
    }
    .btn-print:hover {
      background: #e03d5e;
    }
    @media print {
      body {
        background: white;
        padding: 0;
      }
      .container {
        box-shadow: none;
        border: none;
        padding: 0;
      }
      .btn-print {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="date">${today}</div>
    </div>
    
    <div class="badge">Laporan Hasil Tes Resmi</div>
    <h1>${profile.title}</h1>
    <div class="tagline">&ldquo;${profile.tagline}&rdquo;</div>
    <div class="desc">${profile.description}</div>
    
    <h2>Skor Dimensi Kepribadian (0 - 24)</h2>
    <div class="scores-grid">
      <div class="score-card">
        <div class="score-val score-D">${results.mostScores.D}</div>
        <div class="score-label">Dominance (D)</div>
      </div>
      <div class="score-card">
        <div class="score-val score-I">${results.mostScores.I}</div>
        <div class="score-label">Influence (I)</div>
      </div>
      <div class="score-card">
        <div class="score-val score-S">${results.mostScores.S}</div>
        <div class="score-label">Steadiness (S)</div>
      </div>
      <div class="score-card">
        <div class="score-val score-C">${results.mostScores.C}</div>
        <div class="score-label">Compliance (C)</div>
      </div>
    </div>
    
    <h2>Kekuatan Utama (Strengths)</h2>
    <ul>
      ${profile.strengths.map(str => `<li>${str}</li>`).join("")}
    </ul>
    
    <h2>Area Pengembangan (Weaknesses)</h2>
    <ul>
      ${profile.weaknesses.map(weak => `<li>${weak}</li>`).join("")}
    </ul>
    
    <h2>Gaya Komunikasi Efektif</h2>
    <div class="comm-grid">
      <div class="comm-card">
        <div class="comm-title">Cara Menyampaikan Ide</div>
        <p class="comm-body">${profile.communication.speak}</p>
      </div>
      <div class="comm-card">
        <div class="comm-title">Menerima Masukan</div>
        <p class="comm-body">${profile.communication.listen}</p>
      </div>
      <div class="comm-card">
        <div class="comm-title">Kerja Sama Tim</div>
        <p class="comm-body">${profile.communication.collaboration}</p>
      </div>
    </div>
    
    <h2>Gaya Kepemimpinan</h2>
    <p style="font-size: 14px; color: #334155; line-height: 1.7; margin: 0;">${profile.leadership}</p>
    
    <h2>Lingkungan Kerja Ideal</h2>
    <ul>
      ${profile.idealEnvironment.map(env => `<li>${env}</li>`).join("")}
    </ul>
    
    <h2>Rekomendasi Karier</h2>
    <div class="careers-grid">
      ${profile.careers.map(car => `<div class="career-item">${car}</div>`).join("")}
    </div>
    
    <h2>Tips Pengembangan Diri</h2>
    <ul>
      ${profile.developmentTips.map(tip => `<li>${tip}</li>`).join("")}
    </ul>
    
    <div class="conclusion-box">
      <div class="conclusion-title">Kesimpulan Asesmen</div>
      <p class="conclusion-body">${profile.conclusion}</p>
    </div>
    
    <button class="btn-print" onclick="window.print()">Cetak / Simpan PDF dari Berkas Ini</button>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Laporan-DISC-${profile.title.split("/").join("-").replace(/\s+/g, "-")}.html`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render vertical custom SVG bar chart for 0 to 24 scales
  const renderStandardChart = (scores: DISCScore, title: string, subtitle: string) => {
    const maxValue = 24;
    const dimensions: { key: "D" | "I" | "S" | "C"; label: string; color: string; desc: string }[] = [
      { key: "D", label: "Dominance (D)", color: "#ef4444", desc: "Tegas & Penggerak" },
      { key: "I", label: "Influence (I)", color: "#f59e0b", desc: "Sosial & Inspirator" },
      { key: "S", label: "Steadiness (S)", color: "#10b981", desc: "Sabar & Harmonis" },
      { key: "C", label: "Compliance (C)", color: "#3b82f6", desc: "Analitis & Teliti" },
    ];

    const chartHeight = 180;
    const gridLines = [0, 6, 12, 18, 24];

    return (
      <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white text-center">{title}</h4>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center mb-6">{subtitle}</p>

        {/* SVG Wrapper */}
        <div className="w-full max-w-[280px] h-[220px] relative select-none">
          <svg className="w-full h-full" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
            {/* Gridlines */}
            {gridLines.map((line, i) => {
              const y = 20 + chartHeight - (line / maxValue) * chartHeight;
              return (
                <g key={i}>
                  <line
                    x1="45"
                    y1={y}
                    x2="280"
                    y2={y}
                    stroke="#f1f5f9"
                    className="dark:stroke-gray-800"
                    strokeWidth="1"
                    strokeDasharray={line === 0 ? "none" : "3,3"}
                  />
                  <text
                    x="30"
                    y={y + 4}
                    fill="#94a3b8"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    {line}
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {dimensions.map((dim, idx) => {
              const val = scores[dim.key];
              const barHeight = (val / maxValue) * chartHeight;
              const x = 65 + idx * 55;
              const y = 20 + chartHeight - barHeight;
              const barWidth = 24;

              return (
                <g key={idx}>
                  {/* Background shadow bar */}
                  <rect
                    x={x}
                    y="20"
                    width={barWidth}
                    height={chartHeight}
                    fill="#f8fafc"
                    className="dark:fill-gray-900/40"
                    rx="4"
                  />
                  
                  {/* Dynamic value bar */}
                  <motion.rect
                    initial={{ height: 0, y: 20 + chartHeight }}
                    animate={{ height: barHeight, y: y }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill={dim.color}
                    rx="4"
                  />

                  {/* Top value text */}
                  <text
                    x={x + barWidth / 2}
                    y={y - 6}
                    fill="#475569"
                    className="dark:fill-gray-300 font-bold"
                    fontSize="11"
                    textAnchor="middle"
                  >
                    {val}
                  </text>

                  {/* Label x-axis */}
                  <text
                    x={x + barWidth / 2}
                    y={20 + chartHeight + 16}
                    fill="#475569"
                    className="dark:fill-gray-300 font-black"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {dim.key}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mt-2 w-full text-[10px] text-gray-500 dark:text-gray-400">
          {dimensions.map((d, i) => (
            <div key={i} className="flex items-center space-x-1.5 justify-center">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }}></span>
              <span>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render double axis custom SVG bar chart for -24 to +24 scale (Citra Diri)
  const renderCombinedChart = (scores: DISCScore, title: string, subtitle: string) => {
    const maxValue = 24;
    const chartHeight = 180; // Total height from -24 to +24 is 180px
    const halfHeight = chartHeight / 2; // 0 line is at 90px (plus margin)
    const centerY = 20 + halfHeight; // Y coordinate for zero line is 110px

    const gridLines = [-24, -12, 0, 12, 24];
    const dimensions: { key: "D" | "I" | "S" | "C"; label: string; color: string }[] = [
      { key: "D", label: "Dominance (D)", color: "#ef4444" },
      { key: "I", label: "Influence (I)", color: "#f59e0b" },
      { key: "S", label: "Steadiness (S)", color: "#10b981" },
      { key: "C", label: "Compliance (C)", color: "#3b82f6" },
    ];

    return (
      <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white text-center">{title}</h4>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center mb-6">{subtitle}</p>

        {/* SVG Wrapper */}
        <div className="w-full max-w-[280px] h-[220px] relative select-none">
          <svg className="w-full h-full" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
            {/* Gridlines */}
            {gridLines.map((line, i) => {
              const ratio = line / maxValue; // -1 to +1
              const y = centerY - ratio * halfHeight;
              return (
                <g key={i}>
                  <line
                    x1="45"
                    y1={y}
                    x2="280"
                    y2={y}
                    stroke={line === 0 ? "#94a3b8" : "#f1f5f9"}
                    className={line === 0 ? "dark:stroke-gray-600" : "dark:stroke-gray-800"}
                    strokeWidth={line === 0 ? "1.5" : "1"}
                    strokeDasharray={line === 0 ? "none" : "3,3"}
                  />
                  <text
                    x="30"
                    y={y + 4}
                    fill={line === 0 ? "#64748b" : "#94a3b8"}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    {line > 0 ? `+${line}` : line}
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {dimensions.map((dim, idx) => {
              const val = scores[dim.key]; // -24 to +24
              const ratio = val / maxValue; // -1 to +1
              const barHeight = Math.abs(ratio * halfHeight);
              const x = 65 + idx * 55;
              const barWidth = 24;

              // If positive, bar grows upwards from centerY
              // If negative, bar grows downwards from centerY
              const y = val >= 0 ? centerY - barHeight : centerY;

              return (
                <g key={idx}>
                  {/* Dynamic value bar */}
                  <motion.rect
                    initial={{ height: 0, y: centerY }}
                    animate={{ height: barHeight, y: y }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill={dim.color}
                    rx="2"
                  />

                  {/* Value text indicator */}
                  <text
                    x={x + barWidth / 2}
                    y={val >= 0 ? y - 6 : y + barHeight + 12}
                    fill="#475569"
                    className="dark:fill-gray-300 font-bold"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    {val >= 0 ? `+${val}` : val}
                  </text>

                  {/* Label x-axis */}
                  <text
                    x={x + barWidth / 2}
                    y={centerY + (val >= 0 ? 16 : -10)}
                    fill={val >= 0 ? "#0f172a" : "#475569"}
                    className="dark:fill-gray-300 font-black text-[10px]"
                    textAnchor="middle"
                  >
                    {dim.key}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mt-2 w-full text-[10px] text-gray-500 dark:text-gray-400">
          {dimensions.map((d, i) => (
            <div key={i} className="flex items-center space-x-1.5 justify-center">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }}></span>
              <span>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 sm:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 print:bg-white print:py-0">
      
      <div className="max-w-5xl mx-auto px-4 print:px-0">
        
        {/* ACTION BAR (Hidden in print) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 bg-white dark:bg-gray-950 border border-gray-150/40 dark:border-gray-800 p-4 rounded-2xl shadow-sm print:hidden">
          <div className="grid grid-cols-1 min-[450px]:grid-cols-3 sm:flex sm:flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center space-x-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-gray-900 hover:bg-gray-850 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer w-full sm:w-auto min-h-[44px] sm:min-h-0"
            >
              <Printer className="h-4 w-4 shrink-0" />
              <span>Cetak Hasil / PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="flex items-center justify-center space-x-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-750 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-850 font-bold text-sm transition-colors cursor-pointer w-full sm:w-auto min-h-[44px] sm:min-h-0"
            >
              {copiedSummary ? <Check className="h-4 w-4 text-emerald-500 shrink-0" /> : <Share2 className="h-4 w-4 shrink-0" />}
              <span>{copiedSummary ? "Tersalin!" : "Bagikan"}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center space-x-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-750 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-850 font-bold text-sm transition-colors cursor-pointer w-full sm:w-auto min-h-[44px] sm:min-h-0"
            >
              {copiedLink ? <Check className="h-4 w-4 text-emerald-500 shrink-0" /> : <Copy className="h-4 w-4 shrink-0" />}
              <span>{copiedLink ? "Salin Link" : "Salin Link"}</span>
            </button>
          </div>

          <button
            onClick={onReset}
            className="flex items-center justify-center space-x-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-[#fe4c6f] font-bold text-sm transition-colors cursor-pointer w-full sm:w-auto min-h-[44px] sm:min-h-0 sm:ml-auto"
          >
            <RotateCcw className="h-4 w-4 shrink-0" />
            <span>Tes Ulang</span>
          </button>
        </div>

        {/* PRINT LOGO HEADER (Visible in print only) */}
        <div className="hidden print:flex justify-between items-center border-b border-gray-300 pb-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-[#fe4c6f] text-white">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                DISC <span className="text-[#fe4c6f]">Indonesia</span>
              </span>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                Laporan Kepribadian DISC Resmi
              </p>
            </div>
          </div>
          <div className="text-right text-xs text-gray-500 font-medium">
            <p>Tanggal: {new Date().toLocaleDateString("id-ID")}</p>
          </div>
        </div>

        {/* MAIN REPORT VIEW */}
        <div className="space-y-8">
          
          {/* PROFILE SUMMARY BADGE */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-black uppercase tracking-widest rounded-lg border border-rose-500/20">
                <Award className="h-3.5 w-3.5" />
                <span>Tipe Kepribadian Hasil Tes</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-white pt-2">
                {profile.title}
              </h2>
              
              <p className="text-lg sm:text-2xl text-rose-300 font-extrabold italic leading-tight">
                &ldquo;{profile.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl pt-2">
                {profile.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-800/80 text-xs text-gray-400">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-gray-500">Dikerjakan dalam</span>
                  <span className="font-semibold text-white">{formatTime(elapsedTime)}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase text-gray-500">Validitas Jawaban</span>
                  <span className="font-semibold text-[#22c55e]">100% Selesai (24/24 Soal)</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase text-gray-500">Tipe Analisis</span>
                  <span className="font-semibold text-white">Metode Skoring Psikometrik Standar</span>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC PERCENTAGE BREAKDOWN METERS */}
          <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#fe4c6f]" />
              <span>Breakdown Persentase Dimensi DISC (Grafik Publik)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* D */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-rose-500">Dominance (D)</span>
                  <span className="font-black text-gray-900 dark:text-white">
                    {Math.round((results.mostScores.D / 24) * 100)}%
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(results.mostScores.D / 24) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="bg-rose-500 h-full rounded-full"
                  ></motion.div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Mengukur cara Anda menyelesaikan masalah, mengendalikan tantangan, dan membuat keputusan cepat.
                </p>
              </div>

              {/* I */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-amber-500">Influence (I)</span>
                  <span className="font-black text-gray-900 dark:text-white">
                    {Math.round((results.mostScores.I / 24) * 100)}%
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(results.mostScores.I / 24) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="bg-amber-500 h-full rounded-full"
                  ></motion.div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Mengukur cara Anda berinteraksi sosial, meyakinkan sesama, dan memengaruhi lingkungan luar.
                </p>
              </div>

              {/* S */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-emerald-500">Steadiness (S)</span>
                  <span className="font-black text-gray-900 dark:text-white">
                    {Math.round((results.mostScores.S / 24) * 100)}%
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(results.mostScores.S / 24) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="bg-emerald-500 h-full rounded-full"
                  ></motion.div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Mengukur tingkat kesabaran Anda, konsistensi kerja, loyalitas tim, serta kebutuhan stabilitas.
                </p>
              </div>

              {/* C */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-blue-500">Compliance (C)</span>
                  <span className="font-black text-gray-900 dark:text-white">
                    {Math.round((results.mostScores.C / 24) * 100)}%
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(results.mostScores.C / 24) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="bg-blue-500 h-full rounded-full"
                  ></motion.div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Mengukur cara Anda menghadapi aturan luar, menjamin akurasi data, ketelitian, dan standar sistem.
                </p>
              </div>
            </div>
          </div>

          {/* THREE CHARTS SECTIONS */}
          <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Visualisasi Grafik Kepribadian DISC Anda
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Peta perilaku sosial Anda dalam berbagai kondisi lingkungan.
                </p>
              </div>

              {/* Graph Switcher */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row bg-gray-50 dark:bg-gray-900 p-1 rounded-xl border border-gray-150/40 dark:border-gray-850 text-xs gap-1 sm:gap-0">
                <button
                  onClick={() => setActiveGraphTab("publik")}
                  className={`px-3 py-2 sm:py-1.5 rounded-lg font-bold transition-colors cursor-pointer min-h-[38px] sm:min-h-0 ${
                    activeGraphTab === "publik"
                      ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm font-extrabold"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900"
                  }`}
                >
                  Publik
                </button>
                <button
                  onClick={() => setActiveGraphTab("asli")}
                  className={`px-3 py-2 sm:py-1.5 rounded-lg font-bold transition-colors cursor-pointer min-h-[38px] sm:min-h-0 ${
                    activeGraphTab === "asli"
                      ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm font-extrabold"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900"
                  }`}
                >
                  Asli
                </button>
                <button
                  onClick={() => setActiveGraphTab("campuran")}
                  className={`px-3 py-2 sm:py-1.5 rounded-lg font-bold transition-colors cursor-pointer min-h-[38px] sm:min-h-0 ${
                    activeGraphTab === "campuran"
                      ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm font-extrabold"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900"
                  }`}
                >
                  Citra Diri
                </button>
                <button
                  onClick={() => setActiveGraphTab("semua")}
                  className={`px-3 py-2 sm:py-1.5 rounded-lg font-bold transition-colors cursor-pointer min-h-[38px] sm:min-h-0 ${
                    activeGraphTab === "semua"
                      ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm font-extrabold"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900"
                  }`}
                >
                  Semua
                </button>
              </div>
            </div>

            {/* Render Selected Tab */}
            <div className="pt-2">
              <div className="hidden print:grid print:grid-cols-3 print:gap-4 grid-cols-1 md:grid-cols-3 gap-6">
                {/* Always visible in print, grid layout */}
                {renderStandardChart(
                  results.mostScores,
                  "Grafik 1: Perilaku Publik (Luar)",
                  "Bagaimana Anda berasimilasi dengan lingkungan eksternal / pekerjaan"
                )}
                {renderStandardChart(
                  results.leastScores,
                  "Grafik 2: Perilaku Asli (Bawah Tekanan)",
                  "Diri Anda yang alami saat menghadapi tekanan / stres mendadak"
                )}
                {renderCombinedChart(
                  results.combinedScores,
                  "Grafik 3: Citra Diri (Mirror Self)",
                  "Kombinasi utuh bagaimana Anda melihat konsep diri Anda"
                )}
              </div>

              {/* Dynamic rendering for screen using activeGraphTab */}
              <div className="print:hidden">
                {activeGraphTab === "publik" && (
                  <div className="max-w-md mx-auto">
                    {renderStandardChart(
                      results.mostScores,
                      "Grafik 1: Perilaku Publik (Luar)",
                      "Bagaimana Anda berasimilasi dengan lingkungan eksternal / pekerjaan"
                    )}
                  </div>
                )}
                {activeGraphTab === "asli" && (
                  <div className="max-w-md mx-auto">
                    {renderStandardChart(
                      results.leastScores,
                      "Grafik 2: Perilaku Asli (Bawah Tekanan)",
                      "Diri Anda yang alami saat menghadapi tekanan / stres mendadak"
                    )}
                  </div>
                )}
                {activeGraphTab === "campuran" && (
                  <div className="max-w-md mx-auto">
                    {renderCombinedChart(
                      results.combinedScores,
                      "Grafik 3: Citra Diri (Mirror Self)",
                      "Kombinasi utuh bagaimana Anda melihat konsep diri Anda"
                    )}
                  </div>
                )}
                {activeGraphTab === "semua" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {renderStandardChart(
                      results.mostScores,
                      "Grafik 1: Perilaku Publik (Luar)",
                      "Bagaimana Anda berasimilasi dengan lingkungan eksternal / pekerjaan"
                    )}
                    {renderStandardChart(
                      results.leastScores,
                      "Grafik 2: Perilaku Asli (Bawah Tekanan)",
                      "Diri Anda yang alami saat menghadapi tekanan / stres mendadak"
                    )}
                    {renderCombinedChart(
                      results.combinedScores,
                      "Grafik 3: Citra Diri (Mirror Self)",
                      "Kombinasi utuh bagaimana Anda melihat konsep diri Anda"
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* DETAILED INSIGHTS SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kelebihan */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>Kekuatan Utama Anda (Strengths)</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {profile.strengths.map((str, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Area Pengembangan */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <span>Area Pengembangan (Weaknesses)</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {profile.weaknesses.map((weak, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                    <span>{weak}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gaya Komunikasi */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4 md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>Gaya Komunikasi Efektif</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-850">
                  <h4 className="text-xs font-bold uppercase text-gray-400">Cara Menyampaikan Ide</h4>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                    {profile.communication.speak}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-850">
                  <h4 className="text-xs font-bold uppercase text-gray-400">Menerima Masukan</h4>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                    {profile.communication.listen}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-850">
                  <h4 className="text-xs font-bold uppercase text-gray-400">Kerja Sama Tim</h4>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                    {profile.communication.collaboration}
                  </p>
                </div>
              </div>
            </div>

            {/* Gaya Kepemimpinan */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                <span>Gaya Kepemimpinan</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
                {profile.leadership}
              </p>
            </div>

            {/* Lingkungan Kerja Ideal */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Building className="h-5 w-5 text-[#fe4c6f]" />
                <span>Lingkungan Kerja Ideal</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {profile.idealEnvironment.map((env, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                    <span>{env}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rekomendasi Karir */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-indigo-500" />
                <span>Rekomendasi Karier</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {profile.careers.map((car, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-850 flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    <span>{car}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Pengembangan Diri */}
            <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-500" />
                <span>Tips Pengembangan Diri</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {profile.developmentTips.map((tip, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* FINAL CONCLUSION SECTION */}
          <div className="bg-rose-50 dark:bg-rose-950/20 rounded-3xl p-6 sm:p-8 border border-rose-100 dark:border-rose-900/40 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Kesimpulan Hasil Asesmen</h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              {profile.conclusion}
            </p>
          </div>

        </div>

        {/* BOTTOM EXPORT ACTIONS BAR (Hidden in print) */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 print:hidden w-full max-w-md mx-auto sm:max-w-none">
          <button
            onClick={handlePrint}
            className="flex items-center justify-center space-x-2 px-6 py-4 sm:py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-850 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold text-base shadow-lg transition-colors cursor-pointer w-full sm:w-auto min-h-[44px]"
          >
            <Printer className="h-5 w-5 shrink-0" />
            <span>Cetak atau Unduh PDF Resmi</span>
          </button>
          
          <button
            onClick={onReset}
            className="flex items-center justify-center space-x-2 px-6 py-4 sm:py-3.5 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold text-base hover:bg-gray-50 transition-colors cursor-pointer shadow-sm w-full sm:w-auto min-h-[44px]"
          >
            <RotateCcw className="h-5 w-5 shrink-0" />
            <span>Mulai Ulang Tes</span>
          </button>
        </div>

      </div>

      {/* PRINT/PDF INSTRUCTION MODAL */}
      <AnimatePresence>
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 text-gray-800 relative space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPrintModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-3 text-rose-500">
                <div className="p-3 bg-rose-50 rounded-2xl">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">Panduan Cetak Laporan PDF</h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Karena aplikasi ini sedang berjalan di dalam frame pratinjau (iFrame) AI Studio, browser membatasi fungsi cetak langsung demi keamanan.
              </p>

              <div className="space-y-4">
                {/* Option 1: Download HTML */}
                <div className="p-4 bg-rose-50/50 border border-rose-100/60 rounded-2xl space-y-3">
                  <h4 className="font-extrabold text-sm text-gray-900 flex items-center gap-1.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500 text-white text-xs font-black">1</span>
                    Opsi Utama: Unduh File Laporan (.html)
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Unduh berkas laporan digital mandiri Anda yang terformat rapi dan indah. Anda dapat menyimpannya secara offline, membukanya di perangkat apa pun, dan mencetaknya langsung ke PDF dengan kualitas sempurna tanpa hambatan iFrame.
                  </p>
                  <button
                    onClick={() => {
                      handleDownloadHTML();
                      setShowPrintModal(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs transition-colors cursor-pointer shadow-md shadow-rose-100"
                  >
                    <Download className="h-4 w-4" />
                    <span>Unduh Laporan Mandiri Anda</span>
                  </button>
                </div>

                {/* Option 2: New Tab */}
                <div className="p-4 bg-gray-50 border border-gray-200/60 rounded-2xl space-y-2">
                  <h4 className="font-extrabold text-sm text-gray-900 flex items-center gap-1.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-600 text-white text-xs font-black">2</span>
                    Opsi Alternatif: Cetak via Tab Baru
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Klik tombol <strong className="text-gray-800">"Buka di Tab Baru"</strong> (ikon panah keluar di kanan atas layar pratinjau) untuk memuat website di tab penuh. Di tab baru tersebut, tombol <strong className="text-gray-800">"Cetak Hasil / PDF"</strong> akan langsung berfungsi memunculkan dialog cetak/PDF browser bawaan Anda.
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
