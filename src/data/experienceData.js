import companyIcon from '../assets/images/valuablegroup.jpg';
import selfLearnIcon  from '../assets/svg/selfLearn.svg'

const companies = [{
    CompanyName: 'Valuable Group', CompanyIcon: companyIcon, Date: 'MAY, 2023 - Present', Designation: 'Software Developer',
    isTechDetailsAvailable: true, tech_stacks: [{ name: 'Software Dev', stacks: 'JavaScript, Node.js, PHP, React' },
    { name: 'Android Dev', stacks: 'Android Studio, JAVA' },
    { name: 'Database', stacks: 'MySql, MSSQL, MongoDB' },
    { name: 'Others', stacks: 'Wireshark, Documentation' }
    ]
},

{
    CompanyName: 'Self Learning', CompanyIcon: selfLearnIcon, Date: 'Aug, 2019 - Present', Designation: 'Coding and Learning everyday',
    isTechDetailsAvailable: true, tech_stacks: [{ name: 'Programming Languages', stacks: 'JavaScript, C++, PHP, JAVA, Python' },
    { name: 'Frameworks & Technologies', stacks: 'React, NextJs, NodeJs, Android Dev, Deep Learning ' },
    { name: 'Core Concepts & Tools', stacks: 'DSA, Git, SVN, OS, CN' }
    ]
}]

export default companies;