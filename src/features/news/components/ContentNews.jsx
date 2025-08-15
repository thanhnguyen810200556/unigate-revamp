function ContentNews({ content }) {
  return (
    <>
      <div className="relative w-full">
        <img
          src={content.image}
          alt={content.title}
          className="h-full w-full"
        />
      </div>
      <div className="px-8 py-10">
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    </>
  );
}

export default ContentNews;
