import React, { useState, useRef } from "react";

const SONGS = [
  {
    title: "505",
    artist: "Arctic Monkeys",
    url: "/music/505.mp3",
    cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=80&h=80&fit=crop&crop=center",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    url: "/music/After Hours.mp3",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop&crop=center",
  },
  {
    title: "Popular",
    artist: "The Weeknd, Madonna, Playboi Carti",
    url: "/music/The Weeknd, Madonna, Playboi Carti - Popular (Official Music Video).mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=80&h=80&fit=crop&crop=center",
  },
  {
    title: "Timeless",
    artist: "The Weeknd, Playboi Carti",
    url: "/music/The Weeknd  Timeless with Playboi Carti (Official Music Video).mp3",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop&crop=center",
  },
];

const formatTime = (sec) => {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const ListenMusicButton = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const playPause = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const nextSong = () => {
    setCurrent((prev) => (prev + 1) % SONGS.length);
    setPlaying(false);
    setTimeout(() => {
      setPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const prevSong = () => {
    setCurrent((prev) => (prev - 1 + SONGS.length) % SONGS.length);
    setPlaying(false);
    setTimeout(() => {
      setPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  React.useEffect(() => {
    if (audioRef.current && playing) {
      audioRef.current.play();
    }
  }, [current]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const percent = e.target.value;
    audioRef.current.currentTime = (percent / 100) * duration;
    setProgress(audioRef.current.currentTime);
  };

  const selectSong = (index) => {
    setCurrent(index);
    setPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const togglePlayer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Audio element - always present for background playback */}
      <audio
        ref={audioRef}
        src={SONGS[current].url}
        onEnded={nextSong}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        controls={false}
      />
      
      {/* Small tag above the button */}
      <div
        className={`fixed top-28 right-6 z-50 text-white text-xs px-3 py-1 rounded-full shadow-lg transition-all ${
          playing
            ? "bg-green-500"
            : "bg-gradient-to-r from-pink-500 to-purple-600 animate-bounce"
        }`}
      >
        {playing ? "Now Playing..." : "wanna listen to my fav songs"}
      </div>
      
      <button
        className={`fixed top-12 right-6 z-50 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition text-3xl ${
          playing ? 'bg-green-500 hover:bg-green-600 animate-pulse' : 'bg-pink-500 hover:bg-pink-600'
        }`}
        onClick={togglePlayer}
        aria-label="Toggle Music Player"
        style={{ 
          boxShadow: playing 
            ? "0 4px 24px rgba(34,197,94,0.3)" 
            : "0 4px 24px rgba(233,30,99,0.3)" 
        }}
      >
        {playing ? '🎵' : '🎵'}
      </button>
      {open && (
        <div className="fixed top-28 right-6 z-50 bg-gradient-to-br from-[#915EFF] via-pink-400 to-[#f8e1f4] dark:from-[#181028] dark:via-[#915EFF] dark:to-[#151030] text-black dark:text-white w-96 max-w-xs rounded-3xl shadow-2xl p-5 flex flex-col items-center animate-fade-in">
          <div className="flex justify-between items-center w-full mb-2">
            <span className="font-bold text-lg">Now Playing</span>
            <button
              className="ml-auto text-xl text-gray-300 hover:text-pink-200 transition"
              onClick={togglePlayer}
              aria-label="Close Music Player"
            >
              ×
            </button>
          </div>
          <img
            src={SONGS[current].cover}
            alt="cover"
            className="rounded-full w-20 h-20 mb-3 border-4 border-white dark:border-black-200 shadow-lg object-cover"
          />
          <span className="font-semibold mb-1 text-center text-lg">{SONGS[current].title}</span>
          <span className="text-sm text-gray-600 dark:text-gray-300 mb-2">{SONGS[current].artist}</span>
          
          {/* Progress Bar */}
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-xs font-mono w-8 text-right">{formatTime(progress)}</span>
            <input
              type="range"
              min={0}
              max={duration || 1}
              value={progress}
              onChange={e => {
                audioRef.current.currentTime = e.target.value;
                setProgress(Number(e.target.value));
              }}
              className="flex-1 accent-pink-500 h-1 rounded-lg cursor-pointer"
            />
            <span className="text-xs font-mono w-8">{formatTime(duration)}</span>
          </div>
          {/* Controls */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={prevSong}
              className="px-3 py-2 rounded-full bg-white/70 dark:bg-black-100 hover:bg-pink-200 dark:hover:bg-pink-500 transition text-xl shadow"
              aria-label="Previous Song"
            >
              ⏮️
            </button>
            <button
              onClick={playPause}
              className="px-6 py-2 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition text-xl shadow"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? "⏸️" : "▶️"}
            </button>
            <button
              onClick={nextSong}
              className="px-3 py-2 rounded-full bg-white/70 dark:bg-black-100 hover:bg-pink-200 dark:hover:bg-pink-500 transition text-xl shadow"
              aria-label="Next Song"
            >
              ⏭️
            </button>
          </div>
          {/* Song List */}
          <div className="w-full mt-4 max-h-32 overflow-y-auto">
            <div className="text-sm font-semibold mb-2">Playlist</div>
            {SONGS.map((song, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition ${
                  index === current 
                    ? 'bg-pink-500 text-white' 
                    : 'hover:bg-white/20 dark:hover:bg-black-100'
                }`}
                onClick={() => {
                  selectSong(index);
                }}
              >
                <span className="text-xs">{index + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="truncate font-medium">{song.title}</div>
                  <div className="truncate text-xs opacity-75">{song.artist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
};

export default ListenMusicButton; 