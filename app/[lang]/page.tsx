import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Intro } from './components/intro';
import { Members } from './components/members';
import { getBlogPostItems } from '@/lib/blog';
import { BlogSection } from './components/blog-section';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const posts = getBlogPostItems(lang);
  return (
    <>
      <Intro dictionary={dictionary} />
      <Members dictionary={dictionary} />
      <BlogSection dictionary={dictionary} posts={posts} />
    </>
  );
}
