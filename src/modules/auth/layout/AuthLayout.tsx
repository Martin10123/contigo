interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
  description: string;
  descriptionFooter: string;
  image: string;
  title: string;
}

export const AuthLayout = ({
  children,
  description,
  descriptionFooter,
  image,
  title,
}: AuthLayoutProps) => {
  return (
    <div className="container mx-auto p-4 min-h-dvh lg:grid lg:grid-cols-2 lg:items-center before:content before:w-full before:fixed before:top-0 before:left-0 before:bg-[#F9F9F9] before:-z-30 before:h-full">
      <div className="bg-white shadow-md rounded-lg p-3 max-w-xl w-full flex flex-col items-center justify-center gap-4">
        <div className="">
          <img
            className="w-full max-w-[18rem] h-auto object-contain"
            src="/logo-contigo.webp"
            alt="Logo - contigo"
          />
        </div>

        <div className="border-t border-gray-200 w-full pt-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-center text-gray-600 mb-4 lg:text-lg lg:leading-6">
            {description}
          </p>

          {children}

          <p className="text-center text-gray-500 text-sm mt-4 mb-4">
            {descriptionFooter}
          </p>
        </div>
      </div>

      <figure className="hidden lg:block">
        <img
          className="w-full h-auto object-contain"
          src={image}
          alt="Bienvenido a Contigo"
        />
      </figure>
    </div>
  );
};
