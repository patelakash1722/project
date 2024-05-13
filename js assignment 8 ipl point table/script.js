// Mock data for demonstration
const data = [
    { No: 1, Team: "Gujarat Titans", Matches: 14, Won: 10, Lost: 4, Tied: 0, NRR: 0.316, Points: 20 },
    { No: 2, Team: "Chennai Super Kings", Matches: 14, Won: 9, Lost: 5, Tied: 0, NRR: 0.547, Points: 18 },
    { No: 3, Team: "Royal Challengers Bangalore", Matches: 14, Won: 8, Lost: 6, Tied: 0, NRR: -0.171, Points: 16 },
    { No: 4, Team: "Mumbai Indians", Matches: 14, Won: 7, Lost: 7, Tied: 0, NRR: 0.062, Points: 14 },
    { No: 5, Team: "Delhi Capitals", Matches: 14, Won: 6, Lost: 8, Tied: 0, NRR: -0.256, Points: 12 },
    { No: 6, Team: "Punjab Kings", Matches: 14, Won: 6, Lost: 8, Tied: 0, NRR: -0.202, Points: 12 },
    { No: 7, Team: "Rajasthan Royals", Matches: 14, Won: 6, Lost: 8, Tied: 0, NRR: -0.344, Points: 12 },
    { No: 8, Team: "Kolkata Knight Riders", Matches: 14, Won: 4, Lost: 10, Tied: 0, NRR: -0.494, Points: 8 }
  ];
  
  // Function to populate table with data
  function populateTable(data) {
    const tableBody = document.getElementById('table-body');
    data.forEach(team => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${team.No}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR}</td>
        <td>${team.Points}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Sort data based on NRR value
  data.sort((a, b) => b.NRR - a.NRR);
  
  // Populate table with sorted data
  populateTable(data);
  