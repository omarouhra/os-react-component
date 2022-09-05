import LinkedinIcon from "../components/icons/LinkedinIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

export const TwitterShare = () => {
  const ShareURL = `https://twitter.com/intent/tweet?text=OS Components &url=https://os-c.vercel.app`;

  return (
    <a href={ShareURL} target='_blank' rel='noopener noreferrer'>
      <TwitterIcon />
    </a>
  );
};

export const LinkedinShare = () => {
  const ShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=https://os-c.vercel.app`;

  return (
    <a href={ShareURL} target='_blank' rel='noopener noreferrer'>
      <LinkedinIcon />
    </a>
  );
};
