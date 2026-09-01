// import { useEffect, useState } from "react";
// import useProfile from "../../profile/hooks/useProfile";
// import type { User } from "../../auth/utils/authType";
// import { useNavigate } from "react-router";

// const SearchField = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [results, setResults] = useState<User[]>([]);
//   const { handleSearchProfile } = useProfile();

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchQuery.trim().length < 2) {
//       setResults([]);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       try {
//         const data = await handleSearchProfile(searchQuery);
//         setResults(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   return (
//     <>
//       <input
//         onChange={(e) => setSearchQuery(e.target.value)}
//         type="text"
//         placeholder="Search users..."
//         className="w-80 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-md outline-none"
//       />

//       {results.length > 0 && (
//         <div className="absolute top-full mt-2 w-full rounded-xl border border-white/10 bg-[#0c1727] shadow-lg">
//           {results.map((user) => (
//             <button
//               key={user._id}
//               onClick={() => {
//                 navigate(`/profile/${user.username}`);
//                 setResults([]);
//                 setSearchQuery("");
//               }}
//               className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-white/10"
//             >
//               <img
//                 src={user.profileImage}
//                 alt={user.username}
//                 className="h-10 w-10 rounded-full object-cover"
//               />

//               <div>
//                 <p className="font-medium text-white">{user.username}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default SearchField;

import { Search, X, Loader2, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import useProfile from "../../profile/hooks/useProfile";
import type { User } from "../../auth/utils/authType";
import { useNavigate } from "react-router";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSearchProfile } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const data = await handleSearchProfile(searchQuery);
        setResults(data);
      } catch (error) {
        console.log(error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSelectUser = (username: string) => {
    navigate(`/profile/${username}`);

    setResults([]);
    setSearchQuery("");
  };

  const handleClear = () => {
    setSearchQuery("");
    setResults([]);
  };

  const showDropdown =
    searchQuery.trim().length >= 2 &&
    (isLoading || results.length > 0 || !isLoading);

  return (
    <div className="relative w-full max-w-sm">
      {/* Search Input */}
      <div
        className={`group relative flex items-center rounded-2xl border bg-[#151116]/90 backdrop-blur-xl transition-all duration-200 ${
          searchQuery
            ? "border-[#E7A8BD]/25 shadow-[0_8px_30px_rgba(231,168,189,0.06)]"
            : "border-white/[0.07] hover:border-white/[0.12]"
        }`}
      >
        {/* Search Icon */}
        <div className="pointer-events-none absolute left-4 flex items-center">
          <Search
            size={17}
            strokeWidth={1.8}
            className={`transition-colors ${
              searchQuery
                ? "text-[#E7A8BD]"
                : "text-[#625A60] group-hover:text-[#8E858B]"
            }`}
          />
        </div>

        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search people..."
          className="h-11 w-full rounded-2xl bg-transparent pr-11 pl-11 text-sm text-[#F3EDF0] outline-none placeholder:text-[#625A60]"
        />

        {/* Loading */}
        {isLoading && (
          <div className="absolute right-4 flex items-center">
            <Loader2 size={16} className="animate-spin text-[#E7A8BD]" />
          </div>
        )}

        {/* Clear */}
        {!isLoading && searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full text-[#625A60] transition hover:bg-white/[0.06] hover:text-[#C8BDC3]"
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      {showDropdown && (
        <div className="absolute top-[calc(100%+8px)] right-0 left-0 z-50 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#151116]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {/* Dropdown Header */}
          <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
            <div className="flex items-center gap-2">
              <Search size={13} className="text-[#E7A8BD]" />

              <span className="text-[10px] font-medium tracking-[0.15em] text-[#756B72] uppercase">
                People
              </span>
            </div>

            {!isLoading && results.length > 0 && (
              <span className="text-[10px] text-[#514A4F]">
                {results.length} result
                {results.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="flex items-center justify-center gap-2 px-4 py-8">
              <Loader2 size={17} className="animate-spin text-[#E7A8BD]" />

              <span className="text-xs text-[#756B72]">Searching...</span>
            </div>
          )}

          {/* Results */}
          {!isLoading && results.length > 0 && (
            <div className="max-h-80 overflow-y-auto p-2">
              {results.map((user) => (
                <button
                  key={user._id}
                  type="button"
                  onClick={() => handleSelectUser(user.username)}
                  className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 hover:bg-white/[0.045]"
                >
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="rounded-full bg-linear-to-br from-[#E7A8BD] via-[#C77C96] to-[#6D3C50] p-[1.5px]">
                      <img
                        src={user.profileImage}
                        alt={user.username}
                        className="h-10 w-10 rounded-full border-2 border-[#151116] object-cover"
                      />
                    </div>

                    {/* Online-style accent */}
                    <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-[#151116] bg-[#E7A8BD]" />
                  </div>

                  {/* User Info */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-[#EDE6EA] transition-colors group-hover:text-[#E7A8BD]">
                      {user.username}
                    </p>

                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#625A60]">
                      <UserRound size={10} />
                      View profile
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="translate-x-1 text-[#514A4F] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-[#E7A8BD] group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {!isLoading &&
            searchQuery.trim().length >= 2 &&
            results.length === 0 && (
              <div className="flex flex-col items-center justify-center px-4 py-9 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.035] text-[#625A60]">
                  <UserRound size={19} strokeWidth={1.5} />
                </div>

                <p className="mt-3 text-sm font-medium text-[#B8AFB5]">
                  No users found
                </p>

                <p className="mt-1 text-xs text-[#514A4F]">
                  Try searching for another username.
                </p>
              </div>
            )}

          {/* Footer */}
          {!isLoading && results.length > 0 && (
            <div className="border-t border-white/[0.05] px-4 py-2.5">
              <p className="text-center text-[10px] text-[#514A4F]">
                Select a person to view their profile
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchField;
