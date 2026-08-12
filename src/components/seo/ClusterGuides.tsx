import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';
import { contentClusters, getClusterPosts, type ContentCluster } from '../../data/content-silos';

export function ClusterGuides({ cluster }: { cluster: ContentCluster }) {
  const config = contentClusters[cluster];
  const guides = getClusterPosts(cluster, blogPosts, 3);

  if (guides.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-ivory-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow text-gold-600 mb-5 flex items-center gap-4"><span className="accent-rule" />Board Knowledge Center</p>
          <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-5">{config.label}</h2>
          <p className="text-slate-600 font-light leading-relaxed mb-7">{config.description}</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">Explore all board guides <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="lg:col-span-8 border-t border-slate-200">
          {guides.map((guide) => (
            <Link key={guide.slug} to={`/blog/${guide.slug}`} className="group grid sm:grid-cols-12 gap-3 py-6 border-b border-slate-200">
              <span className="sm:col-span-3 text-[10px] uppercase tracking-luxe text-gold-600">{guide.category}</span>
              <span className="sm:col-span-8 font-display text-xl text-ink group-hover:text-gold-600">{guide.title}</span>
              <ArrowUpRight className="sm:col-span-1 w-4 h-4 text-slate-400 group-hover:text-gold-600" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
