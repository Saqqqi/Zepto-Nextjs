


export async function blogData() {
  const res = await fetch(`http://127.0.0.1:1337/api/blogs`, { cache: 'no-store' });


  // Handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch blog data',);
  }

  return res.json();
}

export async function introductionData() {
  const res = await fetch(`http://127.0.0.1:1337/api/homes`, { cache: 'no-store' });


  if (!res.ok) {
    throw new Error('Failed to fetch Introduction data');
  }

  return res.json();
}

export async function AboutData() {
  const res = await fetch(`http://127.0.0.1:1337/api/about`, { cache: 'no-store' });


  if (!res.ok) {
    throw new Error('Failed to fetch About data');
  }

  return res.json();
}


export async function ServiceData() {
  const res = await fetch(`http://127.0.0.1:1337/api/services`, { cache: 'no-store' });


  if (!res.ok) {
    throw new Error('Failed to fetch services data');
  }

  return res.json();
}

