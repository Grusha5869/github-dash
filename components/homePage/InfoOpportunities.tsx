export default function InfoOpportunities() {
    return (
        <div className="mt-16 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-(--text-primary)">
            Что вы получите
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Карточка статистики */}
            <div className="bg-(--bg-secondary) rounded-2xl p-5 border border-(--border) transition hover:scale-[1.02]">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-(--text-primary)">Детальная статистика</h3>
              <p className="text-sm text-(--text-secondary) mt-1">
                Количество репозиториев, фолловеров, звёзд и многое другое.
              </p>
              <div className="mt-3 flex gap-3 text-xs text-(--text-secondary)">
                <span>📁 24 реп.</span>
                <span>⭐ 342 зв.</span>
                <span>👥 128 фол.</span>
              </div>
            </div>

            {/* Карточка языков */}
            <div className="bg-(--bg-secondary) rounded-2xl p-5 border border-(--border) transition hover:scale-[1.02]">
              <div className="text-3xl mb-3">🥧</div>
              <h3 className="text-lg font-semibold text-(--text-primary)">Языки программирования</h3>
              <p className="text-sm text-(--text-secondary) mt-1">
                Круговая диаграмма с распределением языков по репозиториям.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#f1e05a]"></span>JS 45%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3178c6]"></span>TS 30%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3572A5]"></span>Python 25%</span>
              </div>
            </div>

            {/* Карточка коммитов */}
            <div className="bg-(--bg-secondary) rounded-2xl p-5 border border-(--border) transition hover:scale-[1.02]">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-(--text-primary)">Активность коммитов</h3>
              <p className="text-sm text-(--text-secondary) mt-1">
                Линейный график коммитов.
              </p>
              <div className="mt-3 flex items-end gap-1 h-10">
                <div className="w-5 bg-(--accent-blue) h-4 rounded-t-sm"></div>
                <div className="w-5 bg-(--accent-blue) h-7 rounded-t-sm"></div>
                <div className="w-5 bg-(--accent-blue) h-10 rounded-t-sm"></div>
                <div className="w-5 bg-(--accent-blue) h-6 rounded-t-sm"></div>
                <div className="w-5 bg-(--accent-blue) h-8 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>
    )
}