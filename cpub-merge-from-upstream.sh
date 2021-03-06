echo "This script helps merge upstream updates while preserving local customisations"
echo "WARNING: you must have git version 2.23 or more recent"

echo "Check out our MoodleNet branch"
git checkout flavour/moodlenet

echo "Pull changes from upstream"
git pull -Xtheirs https://gitlab.com/moodlenet/frontend.git develop 

echo "Copy upstream changes to our MoodleNet branch"
git push

echo "Check out flavour/commonspub branch"
git checkout flavour/commonspub

echo "Merge MoodleNet to CommonsPub, without commiting yet"
git merge --no-ff --no-commit --strategy-option theirs flavour/moodlenet

echo "Restore files which we don't want overwritten (add any core files that should be different in CommonsPub to the below line in the script)"
for file in README.md .env.example .env.secrets.example docker-compose.yml docker-compose.pi.yml .gitlab-ci.yml public/index.html src/mn-constants.tsx
do
    git reset HEAD ${file}
    git checkout -- ${file}
done

# echo "Do the same for extension directories..."
# for extension in geolocation locales measurement organisation taxonomy value_flows 
# do

#     echo "Preserve ${extension}..."

#     git restore --source=HEAD --staged --worktree -- src/ui/${extension}
    
#     git restore --source=HEAD --staged --worktree -- src/pages/${extension}

# done


echo "Please check if everything looks good (including resolving any merge conflicts) before continuing. Press 'c' to merge and push the changes, or just enter to abort."
read answer
if echo "$answer" | grep -iq "^c" ; then
    echo "Merging and pushing..."
    git commit -m "merged from upstream"
    git push
else 
    echo "Aborting the merge."
    git merge --abort
    exit 1
fi