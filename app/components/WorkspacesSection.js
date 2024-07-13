import styles from '../styles/WorkspacesSection.module.css';

const WorkspacesSection = () => {
  const workspaces = [
    {
      id: 1,
      title: 'Shared Workspace - Hotdesking',
      description: 'Work from any center in your city or across our global network.',
      details: [
        'Individual desks booked for a limited time.',
        'Will be used by other users when usage time is over.',
        'Can be booked according to availability at time of booking.',
      ],
      cityPassPrice: 'LKR 20,000.00/month',
      globalPassPrice: 'LKR 20,000.00/month',
      image: '/images/shared-workspace-hotdesking.jpg',
    },
    {
      id: 2,
      title: 'Shared Workspace - Dedicated Desks',
      description: 'Work from any center in your city or across our global network.',
      details: [
        'Individual desks booked for an extended period of time.',
        'Will not be used by other users during booking period even if not in use.',
        'Can be booked according to availability at time of booking.',
      ],
      cityPassPrice: 'LKR 20,000.00/month',
      globalPassPrice: 'LKR 20,000.00/month',
      image: '/images/shared-workspace-dedicated-desks.jpg',
    },
    {
      id: 3,
      title: 'Private Workspaces',
      description: 'Work from any center in your city or across our global network.',
      details: [
        'Separate private rooms which are not shared.',
        'Ideal for small teams (5-10 people) or individuals who value privacy (will be at higher cost).',
        'Available by hour or day.',
      ],
      cityPassPrice: 'LKR 20,000.00/month',
      globalPassPrice: 'LKR 20,000.00/month',
      image: '/images/private-workspaces.jpg',
    },
  ];
  
  return (
    <section className={styles.workspaces}>
      <h2 className={styles.heading}>Our Workspaces</h2>
      <div className={styles.workspaceGrid}>
        {workspaces.map(workspace => (
          <div key={workspace.id} className={styles.workspace}>
            <img src={workspace.image} alt={workspace.title} className={styles.image} />
            <h3 className={styles.title}>{workspace.title}</h3>
            <p className={styles.description}>{workspace.description}</p>
            <ul className={styles.details}>
              {workspace.details.map((detail, index) => (
                <li key={index} className={styles.detailItem}>{detail}</li>
              ))}
            </ul>
            <p><strong>City Pass</strong> – {workspace.cityPassPrice}</p>
            <p><strong>Global Pass</strong> – {workspace.globalPassPrice}</p>
            <a href="/subscribe" className={styles.button}>Subscribe Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkspacesSection;
