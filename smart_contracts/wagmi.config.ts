import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
  out: './generated.ts',

  plugins: [
    hardhat({
      project: '.',
      include: [
				'ShillCore.json',
      ],
			deployments: {
				ShillCore: {
					11155111: '0x53ee4dc54233d14274888c091234e5ed65a4d032',
				},
			}
    })
  ]
})
