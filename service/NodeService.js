// NodeService.js
export const NodeService = {
    getTreeNodes() {
        return new Promise((resolve) => {
            const treeNodes = [
                {
                    key: '1',
                    label: 'Tienda 1',
                    children: [
                        {
                            key: '1-1',
                            label: 'Nodo 1.1',
                            children: [],
                        },
                        {
                            key: '1-2',
                            label: 'Nodo 1.2',
                            children: [],
                        },
                    ],
                },
                {
                    key: '2',
                    label: 'Tienda 2',
                    children: [
                        {
                            key: '2-1',
                            label: 'Nodo 2.1',
                            children: [],
                        },
                        {
                            key: '2-2',
                            label: 'Nodo 2.2',
                            children: [],
                        },
                    ],
                },
            ];

            setTimeout(() => {
                resolve(treeNodes);
            }, 0);
        });
    },
};
