import { Helmet } from "react-helmet-async";

const Title = ({ title = "Chateo", description = "A crazy chatting app." }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
