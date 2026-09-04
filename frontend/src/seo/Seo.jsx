import { useEffect } from 'react';

const SITE_NAME = 'Lokha Innovation';
const DEFAULT_DESCRIPTION =
  'Lokha Innovation is a global startup incubator: idea validation, pre-incubation, incubation and acceleration programs, mentorship, and funding access.';

function setMetaTag(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Drop <Seo title="Programs" description="..." /> at the top of any page
 * to set the browser tab title and meta description for that route.
 */
export default function Seo({ title, description = DEFAULT_DESCRIPTION }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Build, Launch, Scale`;
    setMetaTag('description', description);
  }, [title, description]);

  return null;
}
