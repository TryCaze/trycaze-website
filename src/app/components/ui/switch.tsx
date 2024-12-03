'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className='border-2 border-sky-500 rounded text-white'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='bg-slate-800 py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className="text-white" value='hr'>🇭🇷 Hrvatski</option>
        <option className="text-white" value='en'>🇬🇧 English</option>
      </select>
    </label>
  );
}