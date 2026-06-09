import { useEffect, useState } from "react";
import useProfile from "../../profile/hooks/useProfile";
import type { User } from "../../auth/utils/authType";
import { useNavigate } from "react-router";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const { handleSearchProfile } = useProfile();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const data = await handleSearchProfile(searchQuery);
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search users..."
        className="w-80 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-md outline-none"
      />

      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full rounded-xl border border-white/10 bg-[#0c1727] shadow-lg">
          {results.map((user) => (
            <button
              key={user._id}
              onClick={() => {
                navigate(`/profile/${user.username}`);
                setResults([]);
                setSearchQuery("");
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-white/10"
            >
              <img
                src={user.profileImage}
                alt={user.username}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="font-medium text-white">{user.username}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchField;
