import React from 'react';

const Leaderboard = () => {
  const teams = [
    { name: 'Team A', points: 12 },
    { name: 'Team B', points: 10 },
    { name: 'Team C', points: 8 },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl text-center mb-8">Leaderboard</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{team.name}</td>
              <td className="border px-4 py-2">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
