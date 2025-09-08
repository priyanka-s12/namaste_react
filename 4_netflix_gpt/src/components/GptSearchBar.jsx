import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstant';
import { useRef } from 'react';
import ai from '../utils/geminiai';
import { API_OPTIONS } from '../utils/constants';
import { addGeminiMovieResults } from '../utils/gptSlice';

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in TMDB database
  const searcHMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    // const query =
    //   'Act as a Movie Recommendation system & suggest some movies for the query: ' +
    //   searchText.current.value +
    //   ' . only give me names of 5 movies, comma separated. Example Result: sholay, golmaal, koi mil gaya, kuch kuch hota hai, raaz';

    //By using this improved prompt, you're giving the model less room for creative or conversational responses. You are explicitly telling it:
    // What to provide: "a comma-separated list of exactly 5 movies"
    // What to omit: "Do not include any other text, headings, or numbering"
    // A clear example: The example format reinforces the desired output.

    const query =
      'Provide a comma-separated list of exactly 5' +
      searchText.current.value +
      ' movies. Do not include any other text, headings, or numbering. Example format: movie1, movie2, movie3, movie4, movie5.';
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: query,
    });

    // if (!response.text) return 'No data found';
    console.log(response.text);
    //Chupke Chupke, Padosan, Angoor, Bawarchi, Gol Maal - convert into array
    const geminiMovieList = response.text.split(', ');
    console.log(geminiMovieList);

    //for each movie search movie in TMDB api
    const promiseArray = geminiMovieList.map((movie) => searcHMovieTMDB(movie));
    //search function is async function -will take some time to get 5 movies actually it will return 5 promises not actual results, map() won't wait it will call immediately - promise take time to resolve [promise, promise, promise, promise, promise]

    //wait for all promises to resolved
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGeminiMovieResults({
        movieNames: geminiMovieList,
        movieResults: tmdbResults,
      })
    );

    searchText.current.value = '';
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* <input
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
          className="p-4 m-4 bg-white col-span-9"
        /> */}
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 bg-white col-span-9"
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {/* {lang.hindi.search} */}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
