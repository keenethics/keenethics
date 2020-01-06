import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function useScrollToAnchor(anchor) {
  const { asPath } = useRouter();
  const hash = asPath.slice(1, asPath.length);
  const wrapper = useRef(null);

  useEffect(() => {
    if (
      /^#\w+/.test(hash)
      && hash === `#${anchor}`
    ) {
      wrapper.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });

  return wrapper;
}

export default useScrollToAnchor;
