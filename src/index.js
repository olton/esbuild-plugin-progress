import { termx } from "@olton/terminal";
import ora from "ora";

const oraDefaults = {
    color: 'cyan',
    spinner: 'dots',
    text: 'Building...',
    failText: 'Build failed with %s errors.',
    succeedText: 'Build completed in %s ms!',
}

export default (options) => {
    const spinnerOptions = { ...oraDefaults, ...(typeof options === 'string' ? { text: options } : options) }
    const spinner = ora( spinnerOptions )
    let startTime

    return {
        name: 'progress',
        setup(build) {
            build.onStart(() => {
                startTime = Date.now()
                spinner.start()
            })
            build.onEnd((result) => {
                if (result.errors.length > 0) {
                    spinner.fail(`${spinnerOptions.failText.replace('%s', termx.red.write(result.errors.length))}`)
                } else {
                    spinner.succeed(`${spinnerOptions.succeedText.replace('%s', termx.cyanBright.write(Date.now() - startTime))}`)
                }
                spinner.stop()
            })
        }
    }
}