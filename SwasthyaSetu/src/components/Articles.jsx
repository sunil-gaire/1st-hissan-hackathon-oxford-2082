import HomeNav from "./HomeNav"


const Articles = () => {
    const articles = [
        {
          id: 1,
          title: "Understanding Telehealth: How to Get the Most from Your Virtual Visit",
          category: "Accessibility",
          summary: "Digital healthcare is expanding. Learn how to prepare your setup for a successful online consultation.",
          author: "Dr. Sarah Jenkins",
          date: "Dec 18, 2025",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
          tags: ["Digital Health", "Tips"]
        },
        {
          id: 2,
          title: "5 Simple Habits to Improve Your Sleep Quality Tonight",
          category: "Wellness",
          summary: "Struggling with restless nights? These science-backed habits can help you achieve deeper, restorative sleep.",
          author: "Sleep Institute",
          date: "Dec 15, 2025",
          readTime: "4 min read",
          image: "https://plus.unsplash.com/premium_photo-1682096691071-d7d3b967047a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          tags: ["Sleep", "Mental Health"]
        },
        {
          id: 3,
          title: "Seasonal Flu vs. Common Cold: How to Tell the Difference",
          category: "Awareness",
          summary: "Recognizing early symptoms is key to proper treatment. Here is your quick guide to respiratory health.",
          author: "Medical Review Board",
          date: "Dec 10, 2025",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
          tags: ["Prevention", "Flu"]
        },
        {
          id: 4,
          title: "The Role of Nutrition in Managing Daily Stress",
          category: "Nutrition",
          summary: "What you eat affects how you feel. Discover the best 'brain foods' to help stabilize your mood.",
          author: "Elena Rodriguez",
          date: "Dec 05, 2025",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
          tags: ["Diet", "Mental Health"]
        }
      ];
  return (
    <div className="min-h-screen bg-slate-200">
    <HomeNav />
    <div className="my-4 flex justify-center px-4 pt-20 w-full">
<div className="my-6 flex flex-col items-center gap-3 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {articles.map((article) =>(
            <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-slate-400 font-medium">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{article.summary}</p>
              </div>
            </div>
    ))}
    </div>
    </div> 
    </div>
    </div>
  )
}

export default Articles
