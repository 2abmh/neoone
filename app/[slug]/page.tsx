import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/ContentPageView";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { contentPages, resolveContentPage } from "@/lib/content-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = resolveContentPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | neOOne Associates`,
    description: page.summary,
  };
}

export default async function DynamicContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = resolveContentPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Header />
      <ContentPageView page={page} />
      <SiteFooter />
    </>
  );
}
