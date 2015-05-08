# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.title @board.title
json.user_id @board.user_id

json.lists @board.lists do |list|
  json.title list.title
  json.ord list.ord
  json.cards list.cards do |card|
    json.title card.title
    json.description card.description
    json.ord card.ord
  end
end
