const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-96 mx-auto text-center my-14">
      <hr />
      <p className="">{subHeading}</p>
      <h1 className="text-3xl ">{heading}</h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
