function speakerCard({ name, title, description, image }) {
    return (
        <div className="relative rounded-2xl border border-purple-100/70 bg-gradient-to-br from-purple-50 via-white to-slate-50 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-100/30 to-indigo-100/30">
                <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold text-purple-900 mb-2">{name}</h2>
                <p className="text-sm font-semibold text-purple-700 mb-3">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default speakerCard;
