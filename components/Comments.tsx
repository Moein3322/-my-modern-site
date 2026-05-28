interface CommentProps {
  comments: any[];
}

export default function Comments({ comments }: CommentProps) {
  if (!comments || comments.length === 0) return (
    <div className="mt-16 p-8 rounded-3xl border border-white/5 bg-white/5 text-center">
      <p className="text-slate-400">هنوز دیدگاهی ثبت نشده است. شما اولین نفر باشید!</p>
    </div>
  );

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
        <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
        دیدگاه کاربران ({comments.length})
      </h3>
      
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="glass p-6 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-blue-400">{comment.author.node.name}</span>
              <span className="text-xs text-slate-500">
                {new Date(comment.date).toLocaleDateString("fa-IR")}
              </span>
            </div>
            <div 
              className="text-slate-300 leading-relaxed text-sm prose prose-invert"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
