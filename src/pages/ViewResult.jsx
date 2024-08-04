import React, { useEffect } from "react";

const ViewResult = () => {
  // const dispatch = useDispatch();
  // const [searchParam, setSearchParam] = useSearchParams();

  // const { keyUrl } = useParams();
  // const page = searchParam.get("page");
  // const limit = searchParam.get("limit");

  // const { resultMovie, resultMoviePending } = useSelector(
  //   (state) => state.resultMovieReducel
  // );

  // const getResultApi = async () => {
  //   const action = getResultMovieAsync(keyUrl, page, limit);
  //   dispatch(action);
  // };

  // useEffect(() => {
  //   getResultApi();
  // }, [keyUrl, page, limit]);

  return (
    <>
      {/* {resultMoviePending === false && resultMovie.data ? (
        <div className="w-full">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[url(../../../../public/images/movie/breadcrumb-bg.webp)] bg-cover bg-no-repeat">
            <div className="w-full h-full bg-[#00000094] flex justify-center flex-col items-center">
              <h1 className="text-[#E40813] font-bold text-4xl uppercase">
                {resultMovie.data.titlePage}
              </h1>
              <div className="text-white text-center">
                <p className="underline">
                  {resultMovie.data.seoOnPage.titleHead}
                </p>
              </div>
            </div>
          </div>
          <div>
            <VideoList title="" type="" all={false} data={resultMovie.data} />
          </div>
        </div>
      ) : (
        <Loading />
      )} */}{" "}
      View
    </>
  );
};

export default ViewResult;
