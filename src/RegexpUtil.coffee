###
Regexp Util
======
* @Overview
*  - Regexp Utility
* @Description
*  - AIでの意図判定で、Regexpを生成して実行し、結果を返却する。
* @author sakai.memoru
* @since 2016/12/10

Usage
-----
* RegexpUtil = require 'RegexpUtil'
* matches = RegexpUtil.match(msg,'match-pattern-id')
*
###

# functions
match = (msg, patternId) ->
  ###
  # match
  * @param msg {string} message
  * @param match-pattern-id {string} pattern id
  * @return matchObject {object} match object
  ###
