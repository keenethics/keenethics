import React from 'react';

const ProjectCooperationHeader = ({
  platforms,
  technologies,
  methodology,
  team
}) => {
  return (
    <>
      <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="column">
          <table>
            <tr>
              <td style={{ border: 0, paddingLeft: 0 }}>
                <b>Platform</b>:
              </td>
              <td style={{ border: 0 }}>
                { 
                  React.isValidElement(platforms)
                    ? platforms
                    : platforms.map((elem, i) => i < platforms.length-1 ? elem + ', ' : elem )
                }
              </td>
            </tr>

            <tr>
              <td style={{ border: 0, paddingLeft: 0 }}>
                <b>Technologies</b>:
              </td>
              <td style={{ border: 0 }}>
                {
                  React.isValidElement(technologies)
                    ? technologies
                    : technologies.map((elem, i) => i < technologies.length-1 ? elem + ', ' : elem )
                }
              </td>
            </tr>

            <tr>
              <td style={{ border: 0, paddingLeft: 0 }}>
                <b>Methodology</b>:
              </td>
              <td style={{ border: 0 }}>{methodology}</td>
            </tr>

            <tr>
              <td style={{ border: 0, paddingLeft: 0 }}>
                <b>Team</b>:
              </td>
              <td style={{ border: 0 }}>{team}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProjectCooperationHeader;