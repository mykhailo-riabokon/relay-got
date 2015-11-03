/**
 * Created by mikhail on 26.10.15.
 */
function notifyError(error) {
  // BELLs when something goes wrong!
  console.log("\x07" + error);
}

function notifyWarning(warning) {
  console.log(warning);
}

export function notify(stats) {
  let json = stats.toJson();

  if (json.errors.length > 0) {
    json.errors.forEach(notifyError);
  } else if (json.warnings.length > 0) {
    json.warnings.forEach(notifyWarning);
  } else {
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  }
}

