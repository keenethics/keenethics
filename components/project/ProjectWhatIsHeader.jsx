import React from 'react';

const ProjectWhatIsHeader = ({
  projectName,
  industries,
  size,
  location,
  logo
}) => {
  return (
    <div className="columns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div className="column">
      <table>
        <tbody>
          <tr>
            <td style={{ border: 0, paddingLeft: 0 }}>
              <b>Name</b>:
            </td>
            <td style={{ border: 0 }}>{projectName}</td>
          </tr>
          <tr>
            <td style={{ border: 0, paddingLeft: 0 }}>
              <b>Industry</b>:
            </td>
            <td style={{ border: 0 }}>
              {
                industries.join(', ')
              }
            </td>
          </tr>
          <tr>
            <td style={{ border: 0, paddingLeft: 0 }}>
              <b>Size</b>:
            </td>
            <td style={{ border: 0 }}>{size} employees</td>
          </tr>
          <tr>
            <td style={{ border: 0, paddingLeft: 0 }}>
              <b>Location</b>:
            </td>
            <td style={{ border: 0 }}>{location}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="column">
      <img loading="lazy" src={logo} style={{ width: '220px' }} alt={projectName + ' logo'} />
    </div>
    </div>
  )
}

export default ProjectWhatIsHeader;
