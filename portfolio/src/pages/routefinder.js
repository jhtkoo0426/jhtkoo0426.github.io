import * as React from 'react';
import Layout from '../components/layout';
import route_finder_vid from '../videos/route-finder-demo.mp4';


const RouteFinderPage = () => {
  return (
    <Layout>
      <h1 className='project-title'>Route Finder</h1>
      <p>A dynamic and interactive web application that visualizes the pathfinding process 
        of different algorithms to determine the shortest routes between two London 
        Underground stations.</p>
      <br></br>
      <div className='links'>
        <a href='https://jhtkoo0426.github.io/route-finder/' target='_blank'>Project Website</a>
        <a href='https://github.com/jhtkoo0426/route-finder/tree/main' target='_blank'>GitHub Repo</a>
      </div>
      <video src={route_finder_vid} autoPlay loop muted></video>

      <h1 className='section-title'>Motivation</h1>
      <p>While Google Maps and similar applications are impressive and efficient, they 
        conceal the pathfinding process from users. To provide greater accessibility and 
        transparency, I decided to create my own version that visualizes these routes, built
        with React.js.</p>
      <br></br>
      <p>The application has two main features:</p>
      <ul>
        <li><b>Automatic parsing</b> of metro map data (in .csv format) such as stations, 
        interchanges, connections and railway lines.</li>
        <li><b>Dynamic visualization</b> of the exploration of various path-finding algorithms 
        on metro maps.</li>
      </ul>

      <h1 className='section-title'>How Does it Work?</h1>
      <p>CSV data is first processed with parsers and consolidated in a central 
        location (MetroMapAssetsManager.js). The assets (stations, connections, available lines) 
        are loaded into three components:</p>
      <ul>
        <li>A canvas for displaying the metro map.</li>
        <li>A search service where pathfinding algorithms operate, using adjacency lists generated 
          from the loaded stations and connections.</li>
        <li>A path generator, which converts the generated paths into a well-formatted structure 
          that includes all necessary transits, similar to Google Maps.</li>
      </ul>
      <br></br>
      <p>With these services ready, users can search for two stations to visualize the shortest 
        distance path and select a specific pathfinding algorithm (Dijkstra, A*). While my 
        algorithms may not be as sophisticated as Google's, they get the job done.</p>
      <br></br>
      <p>Each connection on the map is represented with three colors:</p>
      <ul>
        <li>Lightest: Unexplored connection</li>
        <li>Darker: Explored connection</li>
        <li>Solid color (corresponding to the line between the stations): Selected route</li>
      </ul>
      <br></br>
      <p>The system explores the entire map in real-time based on the selected algorithm, visualizing 
        the process. Once the shortest distance route is found, the selected route is displayed in 
        solid color.</p>
      
      <h1 className='section-title'>Best Practices</h1>
      <p>I followed SOLID principles and applied design patterns to improve code quality 
        and scalability. Ultimately, this allows me to develop a more efficient, modular and
        adaptable system.</p>
      <br></br>
      <p>For details, please refer to the documentation for the application at 
        the <a className='highlight' href='https://github.com/jhtkoo0426/route-finder/tree/main' target='_blank'>github page</a>.</p>
      <h1></h1>
    </Layout>
  )
}


export const Head = () => <title>Justin Koo</title>
export default RouteFinderPage