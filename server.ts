import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Digital Twin Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "API key is missing configuration." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemPrompt = `Kamu adalah Digital Twin (Asisten Virtual) dari Rafif Ahmad Darmawan, seorang Editor dan Desainer Kreatif yang lulus dari SMKN 1 Tangerang (jurusan Desain Komunikasi Visual / DKV).
Pengalaman kerja: Magang di PT. Tiga Pilar Utama Karya Sentosa sebagai editor/konten kreator untuk social media.
Skill & Minat (Hard Skill): Video Editing, Design Grafis (flyer, banner, brosur, dll), Photography, Videography, Film.
Skill (Soft Skill): Kreativitas, Komunikasi, Pemecahan Masalah, Manajemen Waktu.

Tugasmu adalah menjawab pertanyaan pengunjung website portofolio ini dengan singkat, ramah, dan profesional.
Selalu jawab dalam bahasa Indonesia. Jangan mengarang pengalaman atau skill yang tidak disebutkan di atas.`;

      // Convert history to GenAI SDK format
      const formattedContents = history.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));
      
      // Append the new message
      formattedContents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: systemPrompt,
        }
      });

      res.json({ reply: response.text });
    } catch (error) {
      console.error("Error from Gemini API:", error);
      res.status(500).json({ error: "Gagal memproses pesan AI." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
