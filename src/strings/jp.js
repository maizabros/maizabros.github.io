import emoji from "react-easy-emoji";
import loading_coffee from "../assets/lottie/loading_coffee";

const jp = {
  splashScreen: {
    enabled: true,
    animation: loading_coffee,
    duration: 3000,
  },

  illustration: {
    animated: true,
  },

  greeting: {
    username: "Adrian Maiza",
    section: "ホーム",
    title: "こんにちは！",
    subTitle: emoji(
      "マイザ・アドリアンと申します。2年以上の研究開発経験を持つAI・機械学習エンジニアです。現在、東京の株式会社コンピュータマインで学術研究とAI技術開発に従事しています。"
    ),
    resumeLink: require("../assets/pdf/Maiza_Adrian__CV.pdf"),
    display: true,
  },

  socialMediaLinks: {
    github: "https://github.com/maizabros",
    linkedin: "https://www.linkedin.com/in/adrianmaiza/",
    gmail: "adrian.maiza@gmail.com",
    researchGate: "https://www.researchgate.net/profile/Adrian-Maiza",
    display: true,
  },

  skillsSection: {
    section: "スキル",
    title: "私のスキル",
    subTitle:
      "2年以上の研究開発経験を持つAI・機械学習エンジニアです。ディープラーニングの最新技術の研究から本格的なAIシステムの開発まで、私のスキルの一部は次のとおりです。",
    skills: [
      emoji("🔍 ディープラーニングと生成AIのための新しい技術の研究"),
      emoji("💻 PyTorchを使用した機械学習モデルの開発"),
      emoji("🤖 生成AIモデルの作成とトレーニング"),
      emoji("📊 データ分析と可視化"),
      emoji("🌐 Reactを使用したWeb開発"),
      emoji("📝 学術論文とレポートの執筆"),
      emoji("🗣️ 講演とプレゼンテーション"),
      emoji("🔧 LinuxとWindowsの高度な使用"),
      emoji(
        "🗺️ スペイン語、フランス語、バスク語を母国語とし、流暢な英語能力、日本語は上級（～N2）"
      ),
    ],
    softwareSkills: [
      { name: "Python", color: "3670A0", logoColor: "ffdd54" },
      { name: "PyTorch", color: "EE4C2C", logoColor: "white" },
      { name: "HTML5", color: "E34F26", logoColor: "white" },
      { name: "CSS3", color: "1572B6", logoColor: "white" },
      { name: "JavaScript", color: "F7DF1E", logoColor: "black" },
      { name: "React", color: "61DAFB", logoColor: "black" },
      { name: "Angular", color: "DD0031", logoColor: "white" },
      { name: "NPM", color: "CB3837", logoColor: "white" },
      { name: "C", color: "00599C", logoColor: "white" },
      { name: "LaTeX", color: "008080", logoColor: "white" },
      { name: "Pandas", color: "150458", logoColor: "white" },
      { name: "NumPy", color: "013243", logoColor: "white" },
      { name: "Java", color: "ED8B00", logoColor: "white" },
      { name: "Git", color: "F05032", logoColor: "white" },
      { name: "SQL", color: "00000F", logoColor: "white" },
      { name: "Weights & Biases", color: "FFBE00", logoColor: "white" },
      { name: "Docker", color: "2496ED", logoColor: "white" },
      { name: "Linux", color: "FCC624", logoColor: "black" },
    ].map(({ name, color, logoColor }) => ({
      imageSrc: `${"https://img.shields.io/badge/"}${encodeURIComponent(
        name
      )}-${color}?style=for-the-badge&logo=${name.toLowerCase()}&logoColor=${logoColor}`,
    })),
    display: true,
  },

  educationInfo: {
    section: "学歴",
    title: emoji("学歴 📚🎓"),
    schools: [
      {
        schoolName: "ナバーラ公立大学",
        logo: require("../assets/images/logo_navarrensis_red.png"),
        subHeader: "コンピュータ工学の学士号",
        duration: "2016年9月 - 2022年6月",
        desc: "インテリジェントシステムに特化",
        descBullets: [
          "ソフトウェア開発、機械学習、オペレーティングシステム、ネットワーキング、セキュリティ、データベースなどのコースを受講",
          "学士論文「表情認識のためのGANを使用したラベル付き人間の顔の生成」で優秀賞を受賞",
          "「AI Week 2023」学士論文コンテストで2位入賞",
        ],
      },
      {
        schoolName: "ブレキンゲ工科大学",
        logo: require("../assets/images/bthlogo_svart_platt.png"),
        subHeader: "ERASMUS交換プログラム",
        duration: "2022年1月 - 2022年6月",
        desc:
          "スウェーデンのブレキンゲでのコンピュータサイエンスのヨーロッパ連合交換プログラム",
        descBullets: [
          "ソフトウェアテスト、データ可視化、意思決定支援システムのコースを受講",
          "C1英語ERASMUS認定取得",
        ],
      },
    ],
    display: true,
  },

  workExperiences: {
    section: "経験",
    title: emoji("経験 💻💼"),
    experience: [
      {
        role: "AI・ソフトウェアエンジニア",
        company: "株式会社コンピュータマインド",
        companylogo: require("../assets/images/computermind_logo.jpg"),
        date: "2025年4月 - 現在",
        desc:
          "ステークホルダープロジェクトのための学術研究と新しいAI技術の開発を実施。",
        descBullets: [
          "研究論文の包括的な分析を通じた学術研究の実施",
          "Pythonを使用したステークホルダープロジェクトのための新しいAI技術の開発",
          "AI・機械学習ソリューションのR&D initiatives への貢献",
        ],
      },
      {
        role: "研究助手",
        company: "ナバーラ公立大学",
        companylogo: require("../assets/images/logo_navarrensis_red.png"),
        date: "2022年10月 - 2023年12月",
        desc:
          "無限のスタイル一貫した音声ビジュアルキャラクター生成のための生成AIとディープラーニング技術の研究。",
        descBullets: [
          "IEEE WCCI 2024での学術論文を共著",
          "スタイル一貫したキャラクター生成のための拡散モデル技術を開発",
          "2つの政府資金提供研究プロジェクトに参加",
          "生成AIに関する最新技術の研究",
          "新しい技術を説明する月例セミナー",
          "AIジャーナル向けの学術研究論文の執筆",
        ],
      },
      {
        role: "フルスタック開発者（インターン）",
        company: "Tracasa Instrumental S.L.",
        companylogo: require("../assets/images/TracasaLogo.png"),
        date: "2021年9月 – 2022年1月",
        desc:
          "司法省でのスクラムメンバーフルスタック開発者としてのカリキュラムインターンシップ",
        descBullets: [
          "フルスタック司法手続きソフトウェアソリューションを開発",
          "クライアントのフィードバック統合による機能モックアップの作成",
          "アジャイル、スクラムベースの開発環境での業務",
          "フルスタック開発（SQL、C#、AngularJS、Javascript、Bootstrap、CSSなど）",
          "将来の機能のためのWebモックアップの設計",
        ],
      },
    ],
    display: true,
  },

  openSource: {
    title: emoji("オープンソース 🔓⌨️"),
    section: "オープンソース",
    showGithubProfile: "false",
    buttonText: "更多のプロジェクト",
    display: true,
  },

  bigProjects: {
    section: "プロジェクト",
    title: "重要なプロジェクト",
    subtitle: "私が取り組む機会を得た最も重要なプロジェクトのいくつかです。 ",
    projects: [
      {
        image: require("../assets/images/thesisFront.png"),
        projectName: "学士論文",
        projectDesc: "表情認識のためのGANを使用したラベル付き人間の顔の生成",
        footerLink: [
          {
            name: "出版",
            url:
              "https://academica-e.unavarra.es/entities/publication/c76e0405-6881-4a96-b895-02fae716f18c",
          },
          {
            name: "論文（スペイン語）",
            url: require("../assets/pdf/Thesis.pdf"),
          },
        ],
      },
      {
        image: require("../assets/images/research_project.png"),
        projectName: "研究論文",
        projectDesc:
          "安定拡散による無限キャラクター生成のためのLoRAによるDreamBoothの拡張。日本の横浜で開催されたWCCI 2024で発表。",
        footerLink: [
          {
            name: "IEEE",
            url: "https://ieeexplore.ieee.org/document/10651300",
          },
        ],
      },
      {
        image: require("../assets/images/tracasa-instrumental-thumbnail.png"),
        projectName: "AVANTIUS",
        projectDesc:
          "スペイン司法省のためのAVANTIUS司法プロセス管理システムの開発",
        footerLink: [
          {
            name: "システムの説明（スペイン語）",
            url:
              "https://tracasa.es/proyectos/avantius-sistema-de-gestion-procesal-de-justicia/",
          },
        ],
      },
    ],
    display: true,
  },

  achievementSection: {
    section: "実績",
    title: emoji("実績と認定 🏆💯 "),
    subtitle:
      "AIとディープラーニングでの私の業績が認められる幸運に恵まれました。以下は私の実績と認定の一部です。",

    achievementsCards: [
      {
        title: "学士論文コンテスト2位",
        subtitle:
          "Catedra Tracasa-UPNA 2023 AI Weekの学士論文コンテストのファイナリストで2位受賞。",
        image: require("../assets/images/CatedraTracasUPNALogo.png"),
        imageAlt: "Tracasa-UPNA Logo",
        type: "achievement",
        footerLink: [
          {
            name: "認定",
            url: "",
          },
          {
            name: "コンテスト",
            url:
              "https://www.unavarra.es/catedra-tracasa/semana-de-la-ia/ediciones-anteriores/2023/semana-ia-2023",
          },
          {
            name: "論文ポスター",
            url: require("../assets/pdf/Poster TFG.pdf"),
          },
        ],
      },
      {
        title: "Coursera Deep Learning Specialization",
        subtitle:
          "CourseraでAndrew NgによるDeep Learning Specialization。ニューラルネットワーク、CNN、RNNなどの5つのコース。",
        image: require("../assets/images/courseraLogo.png"),
        imageAlt: "Coursera Logo",
        type: "certification",
        footerLink: [
          {
            name: "認定",
            url:
              "https://www.coursera.org/account/accomplishments/specialization/certificate/3H3S7Y7E2U32",
          },
          {
            name: "コース",
            url: "https://www.coursera.org/specializations/deep-learning",
          },
        ],
      },
      {
        title: "Coursera Generative Adversarial Networks Specialization",
        subtitle:
          "CourseraでDeepLearning.AIによるGAN Specialization。GAN、StyleGANなどの3つのコース。",
        image: require("../assets/images/courseraLogo.png"),
        imageAlt: "Coursera Logo",
        type: "certification",
        footerLink: [
          {
            name: "認定",
            url:
              "https://www.coursera.org/account/accomplishments/specialization/certificate/NV83LN4TJA22",
          },
          {
            name: "コース",
            url:
              "https://www.coursera.org/specializations/generative-adversarial-networks-gans",
          },
        ],
      },
      {
        title: "Certified SAFe® 5 Practitioner",
        subtitle:
          "Scaled Agile, Inc.によるScaled Agile Framework（SAFe）5プラクティショナー認定。",
        image: require("../assets/images/safeLogo.png"),
        imageAlt: "SAFe Logo",
        type: "certification",
        footerLink: [
          {
            name: "認定",
            url: "",
          },
        ],
      },
    ],
    display: true,
  },

  talkSection: {
    section: "プレゼンテーション",
    title: emoji("プレゼンテーション 🧑‍🏫"),
    subtitle: emoji(
      "パワーポイントを作成し、AIとディープラーニングでの私の業績について講演するのが大好きです。"
    ),
    extra: "※スペイン語版",

    talks: [
      {
        title: "GANs: Generative Adversarial Networks",
        subtitle:
          "生成対立ネットワーク、その応用と制限についてのスペイン語セミナー。",
        slides_url: require("../assets/pdf/Seminario GANs.pdf"),
      },
      {
        title: "GANs: Advanced GAN Architectures",
        subtitle:
          "StyleGAN、CycleGANなどのより高度な生成対立ネットワークアーキテクチャについてのスペイン語セミナー。",
        slides_url: require("../assets/pdf/Arquitecturas_GAN_Avanzadas.pdf"),
      },
      {
        title: "Towards Stable Diffusion",
        subtitle: "基本から始める安定拡散についてのスペイン語セミナー。",
        slides_url: require("../assets/pdf/Desde las bases hasta Stable Diffusion.pdf"),
      },
      {
        title: "Expanding Stable Diffusion",
        subtitle:
          "安定拡散の能力を再トレーニングし拡張する方法についてのスペイン語セミナー。",
        slides_url: require("../assets/pdf/Expandiendo Stable Diffusion.pdf"),
      },
    ],
    display: true,
  },

  resumeSection: {
    section: "履歴書",
    title: "履歴書",
    buttonText: "履歴書をダウンロード",
    subtitle: "お気軽に履歴書をダウンロードしてください",
    display: true,
  },

  contactInfo: {
    section: "連絡先",
    title: emoji("連絡先 📬"),
    buttonText: "連絡する",
    subtitle:
      "新しい挑戦と機会を常に探しています。お気軽にお問い合わせください。",
    number: "+81-080-1360-8103",
    email_address: "adrian.maiza@gmail.com",
    display: true,
  },

  isHireable: true,

  footer: {
    display: true,
    credit: emoji("Copyright © 2025. Created by Adrian Maiza"),
  },
};

export { jp };
