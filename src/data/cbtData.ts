import { CBTSection } from '../types';

export const cbtData: CBTSection[] = [
  {
    id: 'jss1-first-term',
    title: 'JSS 1 First Term CBT',
    description: 'Computer-Based Test for JSS 1 First Term topics',
    timeLimit: 30,
    passingScore: 50,
    questions: [
      {
        id: 'jss1-ft-1',
        question: 'What does ICT stand for?',
        options: [
          'Information and Communication Technology',
          'International Computer Technology',
          'Internet Communication Tools',
          'Information Computer Training'
        ],
        correctAnswer: 0,
        explanation: 'ICT stands for Information and Communication Technology, which involves the use of technology to manage and process information.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Introduction to ICT'
      },
      {
        id: 'jss1-ft-2',
        question: 'Which of these is NOT a component of a computer system?',
        options: [
          'Hardware',
          'Software',
          'Peopleware',
          'Netware'
        ],
        correctAnswer: 3,
        explanation: 'The three main components of a computer system are hardware, software, and peopleware. Netware is not a standard component.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Computer Systems'
      },
      {
        id: 'jss1-ft-3',
        question: 'What is the brain of the computer?',
        options: [
          'RAM',
          'CPU',
          'Hard Disk',
          'Monitor'
        ],
        correctAnswer: 1,
        explanation: 'The CPU (Central Processing Unit) is often called the brain of the computer as it processes all instructions and calculations.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Hardware Components'
      },
      {
        id: 'jss1-ft-4',
        question: 'Which of these is an input device?',
        options: [
          'Monitor',
          'Printer',
          'Keyboard',
          'Speaker'
        ],
        correctAnswer: 2,
        explanation: 'A keyboard is an input device as it allows users to input data into the computer.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss1-ft-5',
        question: 'What is the main function of an operating system?',
        options: [
          'To create documents',
          'To manage computer resources',
          'To browse the internet',
          'To play games'
        ],
        correctAnswer: 1,
        explanation: 'The operating system manages computer hardware and software resources and provides common services for computer programs.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Operating Systems'
      },
      {
        id: 'jss1-ft-6',
        question: 'Which of these is NOT a type of computer?',
        options: [
          'Supercomputer',
          'Mainframe',
          'Microcomputer',
          'Megacomputer'
        ],
        correctAnswer: 3,
        explanation: 'The main types of computers are supercomputers, mainframes, and microcomputers. Megacomputer is not a standard classification.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Types of Computers'
      },
      {
        id: 'jss1-ft-7',
        question: 'What is the smallest unit of data in a computer?',
        options: [
          'Byte',
          'Bit',
          'Kilobyte',
          'Megabyte'
        ],
        correctAnswer: 1,
        explanation: 'A bit (binary digit) is the smallest unit of data in a computer, representing either a 0 or 1.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Data Representation'
      },
      {
        id: 'jss1-ft-8',
        question: 'Which of these is a storage device?',
        options: [
          'Mouse',
          'Hard Disk',
          'Monitor',
          'Keyboard'
        ],
        correctAnswer: 1,
        explanation: 'A hard disk is a storage device used to store data permanently.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Storage Devices'
      },
      {
        id: 'jss1-ft-9',
        question: 'What is the function of RAM?',
        options: [
          'To store data permanently',
          'To process data',
          'To temporarily store data',
          'To display data'
        ],
        correctAnswer: 2,
        explanation: 'RAM (Random Access Memory) temporarily stores data that the computer is currently using.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Memory'
      },
      {
        id: 'jss1-ft-10',
        question: 'Which of these is an output device?',
        options: [
          'Keyboard',
          'Mouse',
          'Printer',
          'Scanner'
        ],
        correctAnswer: 2,
        explanation: 'A printer is an output device as it produces physical output from the computer.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Output Devices'
      },
      {
        id: 'jss1-ft-11',
        question: 'What is the function of a mouse?',
        options: [
          'To type text',
          'To point and click',
          'To print documents',
          'To store data'
        ],
        correctAnswer: 1,
        explanation: 'A mouse is used to point and click on items on the computer screen.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss1-ft-12',
        question: 'Which of these is a system software?',
        options: [
          'Microsoft Word',
          'Windows',
          'Photoshop',
          'Games'
        ],
        correctAnswer: 1,
        explanation: 'Windows is a system software (operating system) that manages computer resources.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Software'
      },
      {
        id: 'jss1-ft-13',
        question: 'What is the function of a monitor?',
        options: [
          'To input data',
          'To process data',
          'To display data',
          'To store data'
        ],
        correctAnswer: 2,
        explanation: 'A monitor is an output device that displays information from the computer.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Output Devices'
      },
      {
        id: 'jss1-ft-14',
        question: 'Which of these is NOT a type of software?',
        options: [
          'System software',
          'Application software',
          'Utility software',
          'Hardware software'
        ],
        correctAnswer: 3,
        explanation: 'The main types of software are system software, application software, and utility software. Hardware software is not a valid type.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Software'
      },
      {
        id: 'jss1-ft-15',
        question: 'What is the function of a keyboard?',
        options: [
          'To display data',
          'To input data',
          'To process data',
          'To store data'
        ],
        correctAnswer: 1,
        explanation: 'A keyboard is an input device used to enter data into the computer.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss1-ft-16',
        question: 'Which of these is an example of application software?',
        options: [
          'Windows',
          'Linux',
          'Microsoft Word',
          'BIOS'
        ],
        correctAnswer: 2,
        explanation: 'Microsoft Word is an application software used for word processing.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Software'
      },
      {
        id: 'jss1-ft-17',
        question: 'What is the function of a printer?',
        options: [
          'To input data',
          'To process data',
          'To produce hard copy',
          'To store data'
        ],
        correctAnswer: 2,
        explanation: 'A printer produces hard copy (physical) output from the computer.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Output Devices'
      },
      {
        id: 'jss1-ft-18',
        question: 'Which of these is NOT a storage device?',
        options: [
          'Hard Disk',
          'Flash Drive',
          'RAM',
          'CD-ROM'
        ],
        correctAnswer: 2,
        explanation: 'RAM is a temporary memory, not a storage device. Storage devices store data permanently.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Storage Devices'
      },
      {
        id: 'jss1-ft-19',
        question: 'What is the function of a scanner?',
        options: [
          'To display data',
          'To input data',
          'To process data',
          'To store data'
        ],
        correctAnswer: 1,
        explanation: 'A scanner is an input device that converts physical documents into digital format.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss1-ft-20',
        question: 'Which of these is a utility software?',
        options: [
          'Windows',
          'Antivirus',
          'Microsoft Word',
          'Games'
        ],
        correctAnswer: 1,
        explanation: 'Antivirus software is a utility program that helps protect the computer from viruses.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Software'
      },
      {
        id: 'jss1-ft-21',
        question: 'What is the function of a speaker?',
        options: [
          'To input data',
          'To process data',
          'To produce sound',
          'To store data'
        ],
        correctAnswer: 2,
        explanation: 'A speaker is an output device that produces sound from the computer.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Output Devices'
      },
      {
        id: 'jss1-ft-22',
        question: 'Which of these is NOT an input device?',
        options: [
          'Keyboard',
          'Mouse',
          'Printer',
          'Scanner'
        ],
        correctAnswer: 2,
        explanation: 'A printer is an output device, not an input device.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss1-ft-23',
        question: 'What is the function of a hard disk?',
        options: [
          'To display data',
          'To input data',
          'To store data permanently',
          'To process data'
        ],
        correctAnswer: 2,
        explanation: 'A hard disk is a storage device that stores data permanently.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Storage Devices'
      },
      {
        id: 'jss1-ft-24',
        question: 'Which of these is NOT an output device?',
        options: [
          'Monitor',
          'Printer',
          'Keyboard',
          'Speaker'
        ],
        correctAnswer: 2,
        explanation: 'A keyboard is an input device, not an output device.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Output Devices'
      },
      {
        id: 'jss1-ft-25',
        question: 'What is the function of a flash drive?',
        options: [
          'To display data',
          'To input data',
          'To store data',
          'To process data'
        ],
        correctAnswer: 2,
        explanation: 'A flash drive is a portable storage device used to store data.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Storage Devices'
      },
      {
        id: 'jss1-ft-26',
        question: 'Which of these is NOT a type of memory?',
        options: [
          'RAM',
          'ROM',
          'CPU',
          'Cache'
        ],
        correctAnswer: 2,
        explanation: 'CPU is the Central Processing Unit, not a type of memory.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Memory'
      },
      {
        id: 'jss1-ft-27',
        question: 'What is the function of a CD-ROM?',
        options: [
          'To display data',
          'To input data',
          'To store data',
          'To process data'
        ],
        correctAnswer: 2,
        explanation: 'A CD-ROM is an optical storage device used to store data.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Storage Devices'
      },
      {
        id: 'jss1-ft-28',
        question: 'Which of these is NOT a type of software?',
        options: [
          'System software',
          'Application software',
          'Utility software',
          'Computer software'
        ],
        correctAnswer: 3,
        explanation: 'The main types of software are system software, application software, and utility software.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Software'
      },
      {
        id: 'jss1-ft-29',
        question: 'What is the function of a microphone?',
        options: [
          'To display data',
          'To input sound',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A microphone is an input device that captures sound.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss1-ft-30',
        question: 'Which of these is NOT a component of a computer?',
        options: [
          'CPU',
          'RAM',
          'Hard Disk',
          'Electricity'
        ],
        correctAnswer: 3,
        explanation: 'While electricity is needed to power a computer, it is not a component of the computer itself.',
        classLevel: 'jss1',
        term: 'First Term',
        topic: 'Computer Components'
      }
    ]
  },
  {
    id: 'jss2-first-term',
    title: 'JSS 2 First Term CBT',
    description: 'Computer-Based Test for JSS 2 First Term topics',
    timeLimit: 30,
    passingScore: 50,
    questions: [
      {
        id: 'jss2-ft-1',
        question: 'What is the binary equivalent of decimal 10?',
        options: [
          '1010',
          '1100',
          '1001',
          '1110'
        ],
        correctAnswer: 0,
        explanation: 'The binary equivalent of decimal 10 is 1010.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Number Systems'
      },
      {
        id: 'jss2-ft-2',
        question: 'Which of these is NOT a type of computer memory?',
        options: [
          'RAM',
          'ROM',
          'CPU',
          'Cache'
        ],
        correctAnswer: 2,
        explanation: 'CPU is the Central Processing Unit, not a type of memory.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Memory'
      },
      {
        id: 'jss2-ft-3',
        question: 'What is the function of an operating system?',
        options: [
          'To create documents',
          'To manage computer resources',
          'To browse the internet',
          'To play games'
        ],
        correctAnswer: 1,
        explanation: 'The operating system manages computer hardware and software resources.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Operating Systems'
      },
      {
        id: 'jss2-ft-4',
        question: 'Which of these is an example of application software?',
        options: [
          'Windows',
          'Linux',
          'Microsoft Word',
          'BIOS'
        ],
        correctAnswer: 2,
        explanation: 'Microsoft Word is an application software used for word processing.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Software'
      },
      {
        id: 'jss2-ft-5',
        question: 'What is the function of a network interface card?',
        options: [
          'To display graphics',
          'To connect to a network',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A network interface card allows a computer to connect to a network.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-6',
        question: 'Which of these is NOT a type of computer network?',
        options: [
          'LAN',
          'WAN',
          'MAN',
          'CAN'
        ],
        correctAnswer: 3,
        explanation: 'The main types of networks are LAN, WAN, and MAN. CAN is not a standard network type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-7',
        question: 'What is the function of a router?',
        options: [
          'To display data',
          'To connect networks',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A router connects different networks together.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-8',
        question: 'Which of these is NOT a network topology?',
        options: [
          'Star',
          'Bus',
          'Ring',
          'Square'
        ],
        correctAnswer: 3,
        explanation: 'The main network topologies are star, bus, and ring. Square is not a network topology.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-9',
        question: 'What is the function of a switch?',
        options: [
          'To display data',
          'To connect devices in a network',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A switch connects devices within a network.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-10',
        question: 'Which of these is NOT a network protocol?',
        options: [
          'TCP/IP',
          'HTTP',
          'FTP',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'TCP/IP, HTTP, and FTP are network protocols. CPU is not a protocol.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-11',
        question: 'What is the function of a firewall?',
        options: [
          'To display data',
          'To protect a network',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A firewall protects a network from unauthorized access.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss2-ft-12',
        question: 'Which of these is NOT a type of computer virus?',
        options: [
          'Worm',
          'Trojan',
          'Spyware',
          'Hardware'
        ],
        correctAnswer: 3,
        explanation: 'Worm, Trojan, and Spyware are types of computer viruses. Hardware is not a virus.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Security'
      },
      {
        id: 'jss2-ft-13',
        question: 'What is the function of an antivirus program?',
        options: [
          'To display data',
          'To protect against viruses',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'An antivirus program protects a computer against viruses.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Security'
      },
      {
        id: 'jss2-ft-14',
        question: 'Which of these is NOT a type of backup?',
        options: [
          'Full backup',
          'Incremental backup',
          'Differential backup',
          'Partial backup'
        ],
        correctAnswer: 3,
        explanation: 'The main types of backups are full, incremental, and differential. Partial backup is not a standard type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Data Backup'
      },
      {
        id: 'jss2-ft-15',
        question: 'What is the function of a UPS?',
        options: [
          'To display data',
          'To provide backup power',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A UPS (Uninterruptible Power Supply) provides backup power during power outages.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-16',
        question: 'Which of these is NOT a type of printer?',
        options: [
          'Laser',
          'Inkjet',
          'Dot Matrix',
          'Digital'
        ],
        correctAnswer: 3,
        explanation: 'The main types of printers are laser, inkjet, and dot matrix. Digital is not a printer type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Printers'
      },
      {
        id: 'jss2-ft-17',
        question: 'What is the function of a scanner?',
        options: [
          'To display data',
          'To convert documents to digital format',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A scanner converts physical documents into digital format.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss2-ft-18',
        question: 'Which of these is NOT a type of computer monitor?',
        options: [
          'CRT',
          'LCD',
          'LED',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'The main types of monitors are CRT, LCD, and LED. CPU is not a monitor type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Monitors'
      },
      {
        id: 'jss2-ft-19',
        question: 'What is the function of a graphics card?',
        options: [
          'To display data',
          'To process graphics',
          'To store data',
          'To input data'
        ],
        correctAnswer: 1,
        explanation: 'A graphics card processes and renders graphics for display.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-20',
        question: 'Which of these is NOT a type of computer port?',
        options: [
          'USB',
          'HDMI',
          'VGA',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'USB, HDMI, and VGA are types of computer ports. CPU is not a port.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-21',
        question: 'What is the function of a sound card?',
        options: [
          'To display data',
          'To process sound',
          'To store data',
          'To input data'
        ],
        correctAnswer: 1,
        explanation: 'A sound card processes audio signals for output through speakers.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-22',
        question: 'Which of these is NOT a type of computer cable?',
        options: [
          'USB',
          'HDMI',
          'VGA',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'USB, HDMI, and VGA are types of computer cables. CPU is not a cable.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-23',
        question: 'What is the function of a power supply unit?',
        options: [
          'To display data',
          'To provide power to the computer',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A power supply unit provides electrical power to the computer components.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-24',
        question: 'Which of these is NOT a type of computer case?',
        options: [
          'Tower',
          'Desktop',
          'Laptop',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'The main types of computer cases are tower, desktop, and laptop. CPU is not a case type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-25',
        question: 'What is the function of a cooling fan?',
        options: [
          'To display data',
          'To cool computer components',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A cooling fan helps dissipate heat from computer components.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-26',
        question: 'Which of these is NOT a type of computer memory?',
        options: [
          'RAM',
          'ROM',
          'Cache',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'RAM, ROM, and Cache are types of computer memory. CPU is not a memory type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Memory'
      },
      {
        id: 'jss2-ft-27',
        question: 'What is the function of a motherboard?',
        options: [
          'To display data',
          'To connect all computer components',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'The motherboard connects all computer components together.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-28',
        question: 'Which of these is NOT a type of computer bus?',
        options: [
          'Data bus',
          'Address bus',
          'Control bus',
          'Power bus'
        ],
        correctAnswer: 3,
        explanation: 'The main types of computer buses are data, address, and control. Power bus is not a standard type.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-29',
        question: 'What is the function of a BIOS?',
        options: [
          'To display data',
          'To initialize hardware during startup',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'The BIOS initializes hardware components during computer startup.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss2-ft-30',
        question: 'Which of these is NOT a type of computer expansion slot?',
        options: [
          'PCI',
          'AGP',
          'ISA',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'PCI, AGP, and ISA are types of computer expansion slots. CPU is not an expansion slot.',
        classLevel: 'jss2',
        term: 'First Term',
        topic: 'Computer Hardware'
      }
    ]
  },
  {
    id: 'jss3-first-term',
    title: 'JSS 3 First Term CBT',
    description: 'Computer-Based Test for JSS 3 First Term topics',
    timeLimit: 30,
    passingScore: 50,
    questions: [
      {
        id: 'jss3-ft-1',
        question: 'What is the binary equivalent of decimal 15?',
        options: [
          '1111',
          '1010',
          '1100',
          '1001'
        ],
        correctAnswer: 0,
        explanation: 'The binary equivalent of decimal 15 is 1111.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Number Systems'
      },
      {
        id: 'jss3-ft-2',
        question: 'Which of these is NOT a type of computer network?',
        options: [
          'LAN',
          'WAN',
          'MAN',
          'CAN'
        ],
        correctAnswer: 3,
        explanation: 'The main types of networks are LAN, WAN, and MAN. CAN is not a standard network type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-3',
        question: 'What is the function of a router?',
        options: [
          'To display data',
          'To connect networks',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A router connects different networks together.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-4',
        question: 'Which of these is NOT a network topology?',
        options: [
          'Star',
          'Bus',
          'Ring',
          'Square'
        ],
        correctAnswer: 3,
        explanation: 'The main network topologies are star, bus, and ring. Square is not a network topology.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-5',
        question: 'What is the function of a switch?',
        options: [
          'To display data',
          'To connect devices in a network',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A switch connects devices within a network.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-6',
        question: 'Which of these is NOT a network protocol?',
        options: [
          'TCP/IP',
          'HTTP',
          'FTP',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'TCP/IP, HTTP, and FTP are network protocols. CPU is not a protocol.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-7',
        question: 'What is the function of a firewall?',
        options: [
          'To display data',
          'To protect a network',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A firewall protects a network from unauthorized access.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-8',
        question: 'Which of these is NOT a type of computer virus?',
        options: [
          'Worm',
          'Trojan',
          'Spyware',
          'Hardware'
        ],
        correctAnswer: 3,
        explanation: 'Worm, Trojan, and Spyware are types of computer viruses. Hardware is not a virus.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Security'
      },
      {
        id: 'jss3-ft-9',
        question: 'What is the function of an antivirus program?',
        options: [
          'To display data',
          'To protect against viruses',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'An antivirus program protects a computer against viruses.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Security'
      },
      {
        id: 'jss3-ft-10',
        question: 'Which of these is NOT a type of backup?',
        options: [
          'Full backup',
          'Incremental backup',
          'Differential backup',
          'Partial backup'
        ],
        correctAnswer: 3,
        explanation: 'The main types of backups are full, incremental, and differential. Partial backup is not a standard type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Data Backup'
      },
      {
        id: 'jss3-ft-11',
        question: 'What is the function of a UPS?',
        options: [
          'To display data',
          'To provide backup power',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A UPS (Uninterruptible Power Supply) provides backup power during power outages.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-12',
        question: 'Which of these is NOT a type of printer?',
        options: [
          'Laser',
          'Inkjet',
          'Dot Matrix',
          'Digital'
        ],
        correctAnswer: 3,
        explanation: 'The main types of printers are laser, inkjet, and dot matrix. Digital is not a printer type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Printers'
      },
      {
        id: 'jss3-ft-13',
        question: 'What is the function of a scanner?',
        options: [
          'To display data',
          'To convert documents to digital format',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A scanner converts physical documents into digital format.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Input Devices'
      },
      {
        id: 'jss3-ft-14',
        question: 'Which of these is NOT a type of computer monitor?',
        options: [
          'CRT',
          'LCD',
          'LED',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'The main types of monitors are CRT, LCD, and LED. CPU is not a monitor type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Monitors'
      },
      {
        id: 'jss3-ft-15',
        question: 'What is the function of a graphics card?',
        options: [
          'To display data',
          'To process graphics',
          'To store data',
          'To input data'
        ],
        correctAnswer: 1,
        explanation: 'A graphics card processes and renders graphics for display.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-16',
        question: 'Which of these is NOT a type of computer port?',
        options: [
          'USB',
          'HDMI',
          'VGA',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'USB, HDMI, and VGA are types of computer ports. CPU is not a port.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-17',
        question: 'What is the function of a sound card?',
        options: [
          'To display data',
          'To process sound',
          'To store data',
          'To input data'
        ],
        correctAnswer: 1,
        explanation: 'A sound card processes audio signals for output through speakers.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-18',
        question: 'Which of these is NOT a type of computer cable?',
        options: [
          'USB',
          'HDMI',
          'VGA',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'USB, HDMI, and VGA are types of computer cables. CPU is not a cable.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-19',
        question: 'What is the function of a power supply unit?',
        options: [
          'To display data',
          'To provide power to the computer',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A power supply unit provides electrical power to the computer components.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-20',
        question: 'Which of these is NOT a type of computer case?',
        options: [
          'Tower',
          'Desktop',
          'Laptop',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'The main types of computer cases are tower, desktop, and laptop. CPU is not a case type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-21',
        question: 'What is the function of a cooling fan?',
        options: [
          'To display data',
          'To cool computer components',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A cooling fan helps dissipate heat from computer components.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-22',
        question: 'Which of these is NOT a type of computer memory?',
        options: [
          'RAM',
          'ROM',
          'Cache',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'RAM, ROM, and Cache are types of computer memory. CPU is not a memory type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Memory'
      },
      {
        id: 'jss3-ft-23',
        question: 'What is the function of a motherboard?',
        options: [
          'To display data',
          'To connect all computer components',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'The motherboard connects all computer components together.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-24',
        question: 'Which of these is NOT a type of computer bus?',
        options: [
          'Data bus',
          'Address bus',
          'Control bus',
          'Power bus'
        ],
        correctAnswer: 3,
        explanation: 'The main types of computer buses are data, address, and control. Power bus is not a standard type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-25',
        question: 'What is the function of a BIOS?',
        options: [
          'To display data',
          'To initialize hardware during startup',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'The BIOS initializes hardware components during computer startup.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-26',
        question: 'Which of these is NOT a type of computer expansion slot?',
        options: [
          'PCI',
          'AGP',
          'ISA',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'PCI, AGP, and ISA are types of computer expansion slots. CPU is not an expansion slot.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Hardware'
      },
      {
        id: 'jss3-ft-27',
        question: 'What is the function of a network interface card?',
        options: [
          'To display graphics',
          'To connect to a network',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A network interface card allows a computer to connect to a network.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Networking'
      },
      {
        id: 'jss3-ft-28',
        question: 'Which of these is NOT a type of computer virus?',
        options: [
          'Worm',
          'Trojan',
          'Spyware',
          'Hardware'
        ],
        correctAnswer: 3,
        explanation: 'Worm, Trojan, and Spyware are types of computer viruses. Hardware is not a virus.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Security'
      },
      {
        id: 'jss3-ft-29',
        question: 'What is the function of an antivirus program?',
        options: [
          'To display data',
          'To protect against viruses',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'An antivirus program protects a computer against viruses.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Computer Security'
      },
      {
        id: 'jss3-ft-30',
        question: 'Which of these is NOT a type of backup?',
        options: [
          'Full backup',
          'Incremental backup',
          'Differential backup',
          'Partial backup'
        ],
        correctAnswer: 3,
        explanation: 'The main types of backups are full, incremental, and differential. Partial backup is not a standard type.',
        classLevel: 'jss3',
        term: 'First Term',
        topic: 'Data Backup'
      }
    ]
  },
  {
    id: 'ss1-first-term',
    title: 'SS 1 First Term CBT',
    description: 'Computer-Based Test for SS 1 First Term topics',
    timeLimit: 30,
    passingScore: 50,
    questions: [
      {
        id: 'ss1-ft-1',
        question: 'Which of these is NOT a programming language?',
        options: [
          'Python',
          'Java',
          'HTML',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'Python, Java, and HTML are programming languages. CPU is a hardware component.',
        classLevel: 'ss1',
        term: 'First Term',
        topic: 'Programming Languages'
      },
      {
        id: 'ss1-ft-2',
        question: 'What is the function of a compiler?',
        options: [
          'To display graphics',
          'To convert high-level code to machine code',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A compiler converts high-level programming code into machine code that computers can execute.',
        classLevel: 'ss1',
        term: 'First Term',
        topic: 'Programming'
      },
      {
        id: 'ss1-ft-3',
        question: 'Which of these is NOT a data type?',
        options: [
          'Integer',
          'String',
          'Boolean',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'Integer, String, and Boolean are data types. CPU is a hardware component.',
        classLevel: 'ss1',
        term: 'First Term',
        topic: 'Programming'
      },
      {
        id: 'ss1-ft-4',
        question: 'What is the function of an IDE?',
        options: [
          'To display graphics',
          'To provide tools for software development',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'An IDE (Integrated Development Environment) provides tools for software development.',
        classLevel: 'ss1',
        term: 'First Term',
        topic: 'Programming'
      },
      {
        id: 'ss1-ft-5',
        question: 'Which of these is NOT a type of loop?',
        options: [
          'For loop',
          'While loop',
          'Do-while loop',
          'CPU loop'
        ],
        correctAnswer: 3,
        explanation: 'For, While, and Do-while are types of loops. CPU loop is not a valid loop type.',
        classLevel: 'ss1',
        term: 'First Term',
        topic: 'Programming'
      }
    ]
  },
  {
    id: 'ss2-first-term',
    title: 'SS 2 First Term CBT',
    description: 'Computer-Based Test for SS 2 First Term topics',
    timeLimit: 30,
    passingScore: 50,
    questions: [
      {
        id: 'ss2-ft-1',
        question: 'Which of these is NOT a database management system?',
        options: [
          'MySQL',
          'Oracle',
          'MongoDB',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'MySQL, Oracle, and MongoDB are database management systems. CPU is a hardware component.',
        classLevel: 'ss2',
        term: 'First Term',
        topic: 'Databases'
      },
      {
        id: 'ss2-ft-2',
        question: 'What is the function of SQL?',
        options: [
          'To display graphics',
          'To manage and query databases',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'SQL (Structured Query Language) is used to manage and query databases.',
        classLevel: 'ss2',
        term: 'First Term',
        topic: 'Databases'
      },
      {
        id: 'ss2-ft-3',
        question: 'Which of these is NOT a type of database?',
        options: [
          'Relational',
          'NoSQL',
          'Object-oriented',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'Relational, NoSQL, and Object-oriented are types of databases. CPU is a hardware component.',
        classLevel: 'ss2',
        term: 'First Term',
        topic: 'Databases'
      },
      {
        id: 'ss2-ft-4',
        question: 'What is the function of a primary key?',
        options: [
          'To display data',
          'To uniquely identify records in a table',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'A primary key uniquely identifies each record in a database table.',
        classLevel: 'ss2',
        term: 'First Term',
        topic: 'Databases'
      },
      {
        id: 'ss2-ft-5',
        question: 'Which of these is NOT a database operation?',
        options: [
          'SELECT',
          'INSERT',
          'UPDATE',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'SELECT, INSERT, and UPDATE are database operations. CPU is a hardware component.',
        classLevel: 'ss2',
        term: 'First Term',
        topic: 'Databases'
      }
    ]
  },
  {
    id: 'ss3-first-term',
    title: 'SS 3 First Term CBT',
    description: 'Computer-Based Test for SS 3 First Term topics',
    timeLimit: 30,
    passingScore: 50,
    questions: [
      {
        id: 'ss3-ft-1',
        question: 'Which of these is NOT a web development framework?',
        options: [
          'React',
          'Angular',
          'Vue',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'React, Angular, and Vue are web development frameworks. CPU is a hardware component.',
        classLevel: 'ss3',
        term: 'First Term',
        topic: 'Web Development'
      },
      {
        id: 'ss3-ft-2',
        question: 'What is the function of CSS?',
        options: [
          'To display graphics',
          'To style web pages',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'CSS (Cascading Style Sheets) is used to style and format web pages.',
        classLevel: 'ss3',
        term: 'First Term',
        topic: 'Web Development'
      },
      {
        id: 'ss3-ft-3',
        question: 'Which of these is NOT a web protocol?',
        options: [
          'HTTP',
          'HTTPS',
          'FTP',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'HTTP, HTTPS, and FTP are web protocols. CPU is a hardware component.',
        classLevel: 'ss3',
        term: 'First Term',
        topic: 'Web Development'
      },
      {
        id: 'ss3-ft-4',
        question: 'What is the function of JavaScript?',
        options: [
          'To display graphics',
          'To add interactivity to web pages',
          'To store data',
          'To process data'
        ],
        correctAnswer: 1,
        explanation: 'JavaScript is used to add interactivity and dynamic behavior to web pages.',
        classLevel: 'ss3',
        term: 'First Term',
        topic: 'Web Development'
      },
      {
        id: 'ss3-ft-5',
        question: 'Which of these is NOT a web development tool?',
        options: [
          'VS Code',
          'Chrome DevTools',
          'Git',
          'CPU'
        ],
        correctAnswer: 3,
        explanation: 'VS Code, Chrome DevTools, and Git are web development tools. CPU is a hardware component.',
        classLevel: 'ss3',
        term: 'First Term',
        topic: 'Web Development'
      }
    ]
  }
]; 