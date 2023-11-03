import { TreeNode } from 'primeng/api';

export const data: TreeNode[] = [
  {
    label: 'F.C Barcelona',
    expanded: true,
    children: [
      {
        label: 'Argentina',
        expanded: true,
        children: [
          {
            label: 'Argentina',
          },
          {
            label: 'France',
          },
        ],
      },
      {
        label: 'France',
        expanded: true,
        children: [
          {
            label: 'France',
          },
          {
            label: 'Morocco',
          },
        ],
      },
    ],
  },
];

export const data1: TreeNode[] = [
  {
    label: 'Argentina',
    expanded: true,
    data: 'ar',
    children: [
      {
        label: 'Argentina',
        expanded: true,
        data: 'ar',
        children: [
          {
            label: 'Argentina',
            data: 'ar',
          },
          {
            label: 'Croatia',
            data: 'hr',
          },
        ],
      },
      {
        label: 'France',
        expanded: true,
        data: 'fr',
        children: [
          {
            label: 'France',
            data: 'fr',
          },
          {
            label: 'Morocco',
            data: 'ma',
          },
        ],
      },
    ],
  },
];

export const data2: TreeNode[] = [
  {
    expanded: true,
    type: 'person',
    data: {
      image:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      name: 'Amy Elsner',
      title: 'CEO',
    },
    children: [
      {
        expanded: true,
        type: 'person',
        data: {
          image:
            'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
          name: 'Anna Fali',
          title: 'CMO',
        },
        children: [
          {
            label: 'Sales',
          },
          {
            label: 'Marketing',
          },
        ],
      },
      {
        expanded: true,
        type: 'person',
        data: {
          image:
            'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
          name: 'Stephen Shaw',
          title: 'CTO',
        },
        children: [
          {
            label: 'Development',
          },
          {
            label: 'UI/UX Design',
          },
        ],
      },
    ],
  },
];

export const data3: TreeNode[] = [
  {
    expanded: true,
    type: 'person',
    styleClass: 'bg-indigo-500 text-white',
    data: {
      image:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      name: 'Amy Elsner',
      title: 'CEO',
    },
    children: [
      {
        expanded: true,
        type: 'person',
        styleClass: 'bg-purple-500 text-white',
        data: {
          image:
            'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
          name: 'Anna Fali',
          title: 'CMO',
        },
        children: [
          {
            label: 'Sales',
            styleClass: 'bg-purple-500 text-white',
            style: ' border-radius: 12px',
          },
          {
            label: 'Marketing',
            styleClass: 'bg-purple-500 text-white',
            style: ' border-radius: 12px',
          },
        ],
      },
      {
        expanded: true,
        type: 'person',
        styleClass: 'bg-teal-500 text-white',
        data: {
          image:
            'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
          name: 'Stephen Shaw',
          title: 'CTO',
        },
        children: [
          {
            label: 'Development',
            styleClass: 'bg-teal-500 text-white',
          },
          {
            label: 'UI/UX Design',
            styleClass: 'bg-teal-500 text-white',
          },
        ],
      },
    ],
  },
];
