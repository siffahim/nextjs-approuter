const DynamicPage = ({ params, searchParams }) => {
  return (
    <div>
      <h1>This is dynamic page: {params.id} </h1>
    </div>
  );
};

export default DynamicPage;
