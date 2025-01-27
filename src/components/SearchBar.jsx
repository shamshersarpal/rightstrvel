
import "flatpickr/dist/flatpickr.min.css";
import { DatePickerWithRange } from "./DatePicker";


export default function SearchBar() {
  return (
    <>
    <div className="mx-4">
    <section className="py-2 bg-white   mx-auto rounded-lg shadow-lg max-w-[955px] mt-2">
        <div className="container mx-auto px-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {/* Column 1 */}
            <div className="bg-white  ">


              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="countries"
                  className=" mb-2 text-sm font-medium flex items-center gap-1 text-gray-900 dark:text-white"
                ><svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  Region
                </label>
                <select
                  id="region"
                  defaultValue=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                >
                  <option value=""> Select Region</option>
                  <option value="US">Africa</option>
                  <option value="CA">Asia</option>
                  <option value="FR">Europe</option>
                  <option value="DE">America</option>
                </select>
              </form>    


            </div>
            {/* Column 2 */}
            <div className="bg-white-100">
              <form className="max-w-sm mx-auto  ">
                <label
                  htmlFor="countries"
                  className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900  "
                ><svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>

                  Destinations
                </label>
                <select
                  id="destinations"
                  defaultValue=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                >
                  <option selected=""> Select Destinations</option>
                  <option value="US">Destinations</option>
                  <option value="CA">Emirates</option>
                </select>
              </form>
            </div>
            {/* Column 3 */}
            <div className="bg-white  ">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="countries"
                  className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900  "
                ><svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                    />
                  </svg>

                  Date To From
                </label>
                <DatePickerWithRange />
              </form>
            </div>
            {/* Column 4 */}
            <div className="bg-white  ">
              <form className="max-w-sm mx-auto">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-white  "
                > s

                </label>
                <button type="button" className="text-white justify-center bg-gradient-to-r w-full flex items-center gap-1 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                  </svg>
                  Search </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
      
    </>
  );
}
