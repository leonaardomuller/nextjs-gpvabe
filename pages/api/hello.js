// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  try {
    await res.revalidate('/');

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).send(`Error revalidating: ${err}`);
  }

  // return res.status(200).json({ name: 'Hello, world!' });
};
