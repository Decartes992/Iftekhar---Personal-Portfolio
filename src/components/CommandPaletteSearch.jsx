import React, { useState, useEffect, useCallback } from 'react';

const allCommands = [
  { name: 'Home', href: '/', type: 'page' },
  { name: 'About', href: '/about', type: 'page' },
  { name: 'Projects', href: '/projects', type: 'page' },
  { name: 'Resume', href: '/resume', type: 'page' },
  { name: 'Contact', href: '/contact', type: 'page' },
  { name: 'Blog', href: '/blog', type: 'page' },
  // Add more commands here, e.g., actions, theme toggle
  {
    name: 'Toggle Theme',
    action: () => {
      document.dispatchEvent(new CustomEvent('toggle-theme-request'));
    },
    type: 'action',
  },
  {
    name: 'View Source on GitHub',
    href: 'https://github.com/IftekharAD/Iftekhar---Personal-Portfolio',
    type: 'link',
  },
];

const CommandPaletteSearch = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCommands, setFilteredCommands] = useState(allCommands);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = React.createRef();

  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setFilteredCommands(allCommands);
      setSelectedIndex(0);
      // Focus input when palette opens
      setTimeout(() => inputRef.current?.focus(), 100); // Delay to ensure it's visible
    }
  }, [isOpen, inputRef]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredCommands(allCommands);
    } else {
      setFilteredCommands(
        allCommands.filter(command =>
          command.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setSelectedIndex(0); // Reset selection on new search term
  }, [searchTerm]);

  const handleKeyDown = useCallback((event) => {
    if (!isOpen) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex(prevIndex => (prevIndex + 1) % filteredCommands.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex(prevIndex => (prevIndex - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (filteredCommands[selectedIndex]) {
        const command = filteredCommands[selectedIndex];
        if (command.type === 'page' && command.href) {
          window.location.href = command.href;
          onClose();
        } else if (command.type === 'action' && command.action) {
          command.action();
          onClose();
        } else if (command.type === 'link' && command.href) {
          window.open(command.href, '_blank');
          onClose();
        }
      }
    } else if (event.key === 'Escape') {
      onClose();
    }
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex items-start justify-center pt-16 md:pt-24">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search commands or pages..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-4 text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none border-b border-gray-200 dark:border-gray-700"
        />
        <ul className="max-h-80 overflow-y-auto">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <li key={command.name + index}>
                <button
                  onClick={() => {
                    if (command.type === 'page' && command.href) {
                      window.location.href = command.href;
                    } else if (command.type === 'action' && command.action) {
                      command.action();
                    } else if (command.type === 'link' && command.href) {
                      window.open(command.href, '_blank');
                    }
                    onClose();
                  }}
                  className={`w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors duration-150 ease-in-out text-gray-700 dark:text-gray-200 ${index === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                >
                  {command.name}
                  {command.type === 'link' && <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">(opens in new tab)</span>}
                </button>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500 dark:text-gray-400">
              No results found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CommandPaletteSearch;
