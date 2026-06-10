import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ChevronRight,
  Calendar,
  Layers,
  ShieldCheck,
  ImagePlus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/ongoingProjects";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import FeatureAccordion from "@/components/FeatureAccordion";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightbox, setLightbox] = useState<string | null>(null);
  const [uploadedShots, setUploadedShots] = useState<{ url: string; caption: string }[]>([]);
  const [archDiagram, setArchDiagram] = useState<string | null>(null);

  if (!project) return <Navigate to="/" replace />;

  const allShots = [...project.screenshots, ...uploadedShots];

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (v: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setter(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-background cyber-grid relative">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 pt-28 pb-20"
      >
        {/* Back */}
        <Link
          to="/#ongoing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Hero */}
        <section className="glass-card neon-border p-8 md:p-10 mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
              {project.status}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {project.name}
          </h1>
          <p className="text-lg text-primary/90 mb-6">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <Button asChild variant="outline">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" /> View on GitHub
                </a>
              </Button>
            )}
          </div>
        </section>

        {/* Overview */}
        <SectionTitle>Project Overview</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <OverviewCard title="Problem" text={project.overview.problem} />
          <OverviewCard title="Why it exists" text={project.overview.why} />
          <OverviewCard title="Target Users" text={project.overview.targetUsers} />
          <OverviewCard title="Real-world Applications" text={project.overview.realWorld} />
        </div>

        {/* Architecture */}
        <SectionTitle>System Architecture</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" /> Architecture Diagram
              </h3>
              <label className="cursor-pointer text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                <ImagePlus className="w-3.5 h-3.5" /> Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpload(e, setArchDiagram)}
                />
              </label>
            </div>

            {archDiagram ? (
              <img
                src={archDiagram}
                alt="Architecture diagram"
                className="rounded-lg border border-border/40 cursor-zoom-in w-full"
                onClick={() => setLightbox(archDiagram)}
              />
            ) : (
              <div className="space-y-2">
                {project.architecture.flow.map((step, i) => (
                  <div key={step}>
                    <div className="px-4 py-3 rounded-lg bg-primary/5 border border-primary/20 text-sm font-mono text-foreground text-center">
                      {step}
                    </div>
                    {i < project.architecture.flow.length - 1 && (
                      <div className="flex justify-center text-primary/60 text-xs py-1">↓</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="font-bold text-foreground mb-3">Component Breakdown</h3>
              <ul className="space-y-3">
                {project.architecture.components.map((c) => (
                  <li key={c.name}>
                    <p className="text-sm font-semibold text-primary">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <h4 className="text-sm font-bold text-foreground mb-2">Data Flow</h4>
                <p className="text-sm text-muted-foreground">{project.architecture.dataFlow}</p>
              </div>
              <div className="glass-card p-5">
                <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Security Flow
                </h4>
                <p className="text-sm text-muted-foreground">{project.architecture.securityFlow}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <SectionTitle>Working Screenshots</SectionTitle>
        <div className="glass-card p-6 mb-14">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Dashboards, UI mockups, and prototype previews.
            </p>
            <label className="cursor-pointer text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
              <ImagePlus className="w-3.5 h-3.5" /> Add screenshot
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleUpload(e, (url) =>
                    setUploadedShots((s) => [...s, { url, caption: "Screenshot" }])
                  )
                }
              />
            </label>
          </div>

          {allShots.length === 0 ? (
            <div className="border border-dashed border-border/40 rounded-lg py-12 text-center text-sm text-muted-foreground">
              No screenshots yet — upload one to preview.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allShots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(s.url)}
                  aria-label={`Open screenshot: ${s.caption}`}
                  aria-haspopup="dialog"
                  className="group relative rounded-lg overflow-hidden border border-border/40 hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <img
                    src={s.url}
                    alt={s.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-xs text-foreground">
                    {s.caption}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        <SectionTitle>Features Breakdown</SectionTitle>
        <div className="mb-14">
          <FeatureAccordion
            id={`detail-${project.slug}`}
            variant="card"
            allowMultiple
            defaultOpen={[0]}
            items={project.featureDetails.map((f) => ({
              title: f.title,
              content: f.desc,
            }))}
          />
        </div>

        {/* Progress */}
        <SectionTitle>Development Progress</SectionTitle>
        <div className="glass-card p-6 mb-14">
          <div className="flex flex-wrap items-center gap-3">
            {project.progress.map((p, i) => (
              <div key={p.phase} className="flex items-center gap-3">
                <div
                  className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                    p.current
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(195_100%_50%/0.4)]"
                      : p.done
                      ? "bg-primary/10 text-primary border-primary/40"
                      : "bg-muted/30 text-muted-foreground border-border/40"
                  }`}
                >
                  {p.phase}
                </div>
                {i < project.progress.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 h-2 rounded-full bg-muted/30 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${
                  (project.progress.filter((p) => p.done).length / project.progress.length) * 100
                }%`,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </div>

        {/* Challenges */}
        <SectionTitle>Technical Challenges</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <ChallengeCard title="Problems Encountered" items={project.challenges.problems} />
          <ChallengeCard title="Current Limitations" items={project.challenges.limitations} />
          <ChallengeCard title="Future Improvements" items={project.challenges.improvements} />
        </div>

        {/* Roadmap */}
        <SectionTitle>Future Roadmap</SectionTitle>
        <div className="relative pl-8 mb-14">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
          <div className="space-y-6">
            {project.roadmap.map((r, i) => (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(195_100%_50%/0.6)]" />
                <p className="text-xs font-mono text-primary uppercase">{r.phase}</p>
                <p className="font-semibold text-foreground">{r.title}</p>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <SectionTitle>Project Metrics</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <Metric label="Status" value={project.status} />
          <Metric label="Category" value={project.category} />
          <Metric
            label="Progress"
            value={`${Math.round(
              (project.progress.filter((p) => p.done).length / project.progress.length) * 100
            )}%`}
          />
          <Metric
            label="Last Updated"
            value={project.metrics.lastUpdated}
            icon={<Calendar className="w-3.5 h-3.5" />}
          />
        </div>
      </motion.div>

      <ScrollToTop />

      {/* Lightbox */}
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
};

const Lightbox = ({ src, onClose }: { src: string | null; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!src) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus the close button on open
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        // Only the close button is focusable → trap focus
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocusRef.current?.focus?.();
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            ref={closeRef}
            aria-label="Close preview (Esc)"
            className="absolute top-6 right-6 text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded p-1"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            src={src}
            alt="Screenshot preview"
            loading="lazy"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg border border-primary/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{children}</h2>
    <div className="w-12 h-0.5 bg-primary/50 rounded mt-2" />
  </div>
);

const OverviewCard = ({ title, text }: { title: string; text: string }) => (
  <div className="glass-card p-6">
    <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">{title}</p>
    <p className="text-sm text-foreground/90 leading-relaxed">{text}</p>
  </div>
);

const ChallengeCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="glass-card p-6">
    <h3 className="font-bold text-foreground mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="text-sm text-muted-foreground flex gap-2">
          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          {it}
        </li>
      ))}
    </ul>
  </div>
);

const Metric = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) => (
  <div className="glass-card p-5">
    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1">
      {icon}
      {label}
    </p>
    <p className="text-base font-semibold text-foreground">{value}</p>
  </div>
);

export default ProjectDetail;
